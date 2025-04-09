export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('auth-token')
  const session = useCookie('auth-session')
  const localePath = useLocalePath()

  const isAdminRoute = to.path.startsWith('/admin')
  const isLoginRoute = to.path === '/admin/login'

  if (isAdminRoute && !isLoginRoute && (!token.value || !session.value)) {
    return navigateTo(localePath('/admin/login'))
  }

  if (isLoginRoute && token.value && session.value) {
    return navigateTo(localePath('/admin'))
  }
})
