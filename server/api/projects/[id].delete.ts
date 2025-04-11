import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = Number(getRouterParam(event, 'id'))

    await prisma.projects.delete({
      where: { id }
    })

    return { success: true }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error deleting project'
    })
  }
})
