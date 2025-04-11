import { defineEventHandler, readBody, createError } from 'h3'
import { Prisma } from '@prisma/client'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params?.id)
    const body = await readBody(event)

    return await prisma.languages.update({
      where: {
        id
      },
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
