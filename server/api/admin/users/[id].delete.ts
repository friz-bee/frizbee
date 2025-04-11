import { defineEventHandler } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      message: 'Missing id'
    })
  }

  return await prisma.admins.delete({
    where: { id: parseInt(id) }
  })
})
