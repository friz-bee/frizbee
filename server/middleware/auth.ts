import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // Ne pas protéger les routes de login et session
  if (event.path === '/api/admin/login' || event.path === '/api/admin/session') {
    return
  }

  // Ne pas protéger les routes GET
  if (event.method === 'GET') {
    return
  }

  // Ne protéger que les routes API
  if (!event.path.startsWith('/api')) {
    return
  }

  const token = getRequestHeader(event, 'authorization')?.split(' ')[1]

  console.log('token', token)

  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Missing authentication token'
    })
  }

  try {
    const config = useRuntimeConfig(event)
    const decoded = jwt.verify(token, config.jwtSecret) as {
      id: number
      email: string
      role: string
    }

    const admin = await prisma.admin.findUnique({
      where: { id: decoded.id }
    })

    if (!admin) {
      throw createError({
        statusCode: 401,
        message: 'Invalid authentication token'
      })
    }

    // Ajouter l'utilisateur au contexte
    event.context.auth = {
      user: admin
    }
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw createError({
        statusCode: 401,
        message: 'Invalid authentication token'
      })
    }
    throw createError({
      statusCode: 500,
      message: 'Internal server error'
    })
  }
})
