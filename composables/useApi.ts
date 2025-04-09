import type { FetchOptions } from 'ofetch'

type HttpMethod =
  | 'GET'
  | 'HEAD'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'

export const useApi = () => {
  const token = useCookie('auth-token')

  const fetch = async <T>(url: string, options: FetchOptions = {}) => {
    const headers = {
      Authorization: `Bearer ${token.value}`,
      'Content-Type': 'application/json',
      ...options.headers
    }

    const method = options.method?.toUpperCase() as HttpMethod

    return await $fetch<T>(url, {
      ...options,
      headers,
      method
    })
  }

  return {
    fetch
  }
}
