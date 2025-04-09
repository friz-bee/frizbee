import { defineEventHandler, readBody, createError } from 'h3'
import { Prisma } from '@prisma/client'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    return await prisma.language.create({
      data: body
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      throw createError({
        statusCode: 400,
        message: 'uniqueCode'
      })
    }
    throw error
  }
})
