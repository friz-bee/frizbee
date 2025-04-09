import { PrismaClient } from '@prisma/client'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig(event)

  try {
    const admin = await prisma.admin.findUnique({
      where: { email: body.email }
    })

    if (!admin) {
      throw createError({
        statusCode: 401,
        message: 'Invalid credentials'
      })
    }

    const valid = await compare(body.password, admin.password)

    if (!valid) {
      throw createError({
        statusCode: 401,
        message: 'Invalid credentials'
      })
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email, role: admin.role },
      config.jwtSecret,
      { expiresIn: '7d' }
    )

    return {
      token,
      user: {
        id: admin.id,
        email: admin.email,
        username: admin.username,
        role: admin.role
      }
    }
  } catch (error) {
    console.error('Login error:', error)
    throw createError({
      statusCode: 401,
      message: 'Invalid credentials'
    })
  }
})
