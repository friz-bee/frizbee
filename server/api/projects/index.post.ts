import prisma from '~/lib/prisma'
import { Prisma } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { slug, tech_stack, project_url, translations } = body

  try {
    const project = await prisma.projects.create({
      data: {
        slug,
        tech_stack,
        project_url,
        translations: {
          create: translations
        }
      },
      include: {
        translations: true
      }
    })

    return project
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        throw createError({
          statusCode: 400,
          message: 'uniqueSlug'
        })
      }
    }
    throw error
  }
})
