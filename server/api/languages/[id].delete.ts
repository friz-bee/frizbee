import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params?.id)

  return await prisma.language.delete({
    where: {
      id
    }
  })
})
