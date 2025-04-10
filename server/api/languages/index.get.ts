import { defineEventHandler } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
  return await prisma.language.findMany({
    orderBy: {
      isDefault: 'desc'
    }
  })
})
