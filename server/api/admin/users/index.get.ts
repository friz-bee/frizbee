import { defineEventHandler } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
  return await prisma.admins.findMany({
    select: {
      id: true,
      username: true,
      email: true
    }
  })
})
