import { useI18n } from 'vue-i18n'

export const useDefaultMeta = () => {
  const { t } = useI18n()

  return {
    title: t('nav.home'),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: t('footer.description') },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
