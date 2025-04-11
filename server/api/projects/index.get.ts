import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const projects = await prisma.projects.findMany({
      include: {
        translations: {
          include: {
            language: true
          }
        }
      },
      orderBy: {
        created_at: 'desc'
      }
    })

    return projects
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error fetching projects'
    })
  }
})
