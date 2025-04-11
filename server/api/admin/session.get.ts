import jwt from 'jsonwebtoken'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const token = getRequestHeader(event, 'authorization')?.split(' ')[1]

  if (!token) {
    return { user: null }
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret) as {
      id: number
      email: string
      role: string
    }

    const admin = await prisma.admins.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        username: true,
        role: true
      }
    })

    if (!admin) {
      return { user: null }
    }

    return { user: admin }
  } catch (error) {
    return { user: null }
  }
})
