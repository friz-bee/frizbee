import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
  try {
    const [languages, projects, translations] = await Promise.all([
      prisma.language.count(),
      prisma.project.count(),
      prisma.projectTranslation.count()
    ])

    return {
      languages,
      projects,
      translations
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    throw createError({
      statusCode: 500,
      message: 'Error fetching stats'
    })
  }
})
