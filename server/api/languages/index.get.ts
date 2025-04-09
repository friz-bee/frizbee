import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  return await prisma.language.findMany({
    orderBy: {
      isDefault: 'desc'
    }
  })
})
