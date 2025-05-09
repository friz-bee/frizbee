import { defineEventHandler } from 'h3'
import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
  return await prisma.languages.findMany({
    orderBy: {
      is_default: 'desc'
    }
  })
})
