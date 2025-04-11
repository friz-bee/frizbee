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

  const adminId = parseInt(id)

  if (adminId === 1) {
    throw createError({
      statusCode: 403,
      message: 'Cannot delete super admin'
    })
  }

  return await prisma.admins.delete({
    where: { id: adminId }
  })
})
