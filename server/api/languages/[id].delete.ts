import { defineEventHandler } from 'h3'
import prisma from '~/lib/prisma'
export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)

  return await prisma.languages.delete({
    where: {
      id
    }
  })
})
