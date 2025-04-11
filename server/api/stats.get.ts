import prisma from '~/lib/prisma'

export default defineEventHandler(async () => {
  try {
    const [languages, projects, admins] = await Promise.all([
      prisma.languages.count(),
      prisma.projects.count(),
      prisma.admins.count()
    ])

    return {
      languages,
      projects,
      admins
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    throw createError({
      statusCode: 500,
      message: 'Error fetching stats'
    })
  }
})
