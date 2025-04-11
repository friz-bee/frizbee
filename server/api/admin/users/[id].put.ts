import { defineEventHandler, readBody, getRouterParam } from 'h3'
import prisma from '~/lib/prisma'
import { hash } from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const { email, password, username } = body

  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Missing id'
    })
  }

  const existingUser = await prisma.admins.findUnique({
    where: { id: parseInt(id) }
  })

  if (!existingUser) {
    throw createError({
      statusCode: 404,
      message: 'User not found'
    })
  }

  if (email && email !== existingUser.email) {
    const existingEmail = await prisma.admins.findUnique({
      where: { email }
    })

    if (existingEmail) {
      throw createError({
        statusCode: 400,
        message: 'uniqueEmail'
      })
    }
  }

  if (username && username !== existingUser.username) {
    const existingUsername = await prisma.admins.findUnique({
      where: { username }
    })

    if (existingUsername) {
      throw createError({
        statusCode: 400,
        message: 'uniqueUsername'
      })
    }
  }

  const updateData: any = {}
  if (email) updateData.email = email
  if (username) updateData.username = username
  if (password) updateData.password = await hash(password, 10)

  return await prisma.admins.update({
    where: { id: parseInt(id) },
    data: updateData
  })
})
