import jwt from 'jsonwebtoken'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const token = getRequestHeader(event, 'authorization')?.split(' ')[1]

  if (!token) {
    throw createError({
      statusCode: 401,
      message: 'Unauthorized'
    })
  }

  try {
    jwt.verify(token, config.jwtSecret)
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: 'Invalid token'
    })
  }

  // In a real app, you might want to add the token to a blacklist
  // For now, we'll just return success
  return {
    success: true
  }
})
