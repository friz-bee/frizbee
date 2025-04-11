import { useI18n } from 'vue-i18n'

export const useAdminMeta = (pageTitle: string) => {
  const { t } = useI18n()

  return {
    title: `${pageTitle} | Admin Panel`,
    meta: [
      { name: 'description', content: 'Administration panel for Frizbee' },
      { property: 'og:title', content: `${pageTitle} | Admin Panel` },
      { property: 'og:description', content: 'Administration panel for Frizbee' },
      { property: 'og:type', content: 'website' }
    ]
  }
}
