import { defineEventHandler, readBody } from 'h3'
import prisma from '~/lib/prisma'
import { hash } from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, username } = body

  if (!email || !password || !username) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields'
    })
  }

  const existingEmail = await prisma.admins.findUnique({
    where: { email }
  })

  if (existingEmail) {
    throw createError({
      statusCode: 400,
      message: 'uniqueEmail'
    })
  }

  const existingUsername = await prisma.admins.findUnique({
    where: { username }
  })

  if (existingUsername) {
    throw createError({
      statusCode: 400,
      message: 'uniqueUsername'
    })
  }

  const hashedPassword = await hash(password, 10)

  return await prisma.admins.create({
    data: {
      email,
      password: hashedPassword,
      username
    }
  })
})
