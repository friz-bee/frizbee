import * as yup from 'yup'

export const useProjectForm = () => {
  const { t } = useI18n()

  const state = reactive({
    slug: '',
    tech_stack: '',
    project_url: '',
    translations: [] as Array<{
      language_id: number
      title: string
      description: string
    }>
  })

  const setState = (data: Partial<typeof state> | null) => {
    if (!data) return
    Object.assign(state, data)
  }

  const reset = async () => {
    const { data: languages } = await useFetch<Language[]>('/api/languages')
    const defaultLanguage = languages.value?.find((lang) => lang.is_default) || languages.value?.[0]

    Object.assign(state, {
      slug: '',
      tech_stack: '',
      project_url: '',
      translations: [
        {
          language_id: defaultLanguage?.id || 0,
          title: '',
          description: ''
        }
      ]
    })
  }

  const schema = yup.object({
    slug: yup
      .string()
      .required(t('admin.projects.errors.slugRequired'))
      .min(2, t('admin.projects.errors.slugMinLength'))
      .max(100, t('admin.projects.errors.slugMaxLength'))
      .matches(/^[a-z0-9-]+$/, t('admin.projects.errors.slugFormat')),
    tech_stack: yup.string().required(t('admin.projects.errors.techStackRequired')),
    project_url: yup.string().url(t('admin.projects.errors.invalidUrl')).nullable(),
    translations: yup
      .array()
      .of(
        yup.object({
          language_id: yup.number().required(),
          title: yup
            .string()
            .required(t('admin.projects.errors.titleRequired'))
            .min(2, t('admin.projects.errors.titleMinLength'))
            .max(100, t('admin.projects.errors.titleMaxLength')),
          description: yup
            .string()
            .required(t('admin.projects.errors.descriptionRequired'))
            .max(500, t('admin.projects.errors.descriptionMaxLength'))
        })
      )
      .min(1, t('admin.projects.errors.translationsRequired'))
  })

  return { state, setState, schema, reset }
}
