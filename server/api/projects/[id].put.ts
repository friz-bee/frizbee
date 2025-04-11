import prisma from '~/lib/prisma'
import { Prisma } from '@prisma/client'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const { slug, tech_stack, project_url, translations } = body

  // Clean translations data
  const cleanTranslations = translations.map((t: any) => ({
    language_id: t.language_id,
    title: t.title,
    description: t.description
  }))

  try {
    const project = await prisma.projects.update({
      where: { id: Number(id) },
      data: {
        slug,
        tech_stack,
        project_url,
        translations: {
          deleteMany: {},
          create: cleanTranslations
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
