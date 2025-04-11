import jwt from 'jsonwebtoken'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const token = getRequestHeader(event, 'authorization')?.split(' ')[1]

  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as {
      id: number
      email: string
      role: string
    }

    const admin = await prisma.admins.findUnique({
      where: { id: decoded.id }
    })

    if (!admin) {
      throw createError({
        statusCode: 404,
        message: 'Admin not found'
      })
    }

    return admin
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: 'Invalid token'
    })
  }
})
