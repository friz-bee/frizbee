import * as yup from 'yup'

export const useLanguageForm = () => {
  const { t } = useI18n()

  const state = reactive({
    name: '',
    code: '',
    is_default: false
  })

  const setState = (data: Partial<typeof state> | null) => {
    if (!data) return
    Object.assign(state, data)
  }

  const reset = () => {
    Object.assign(state, {
      name: '',
      code: '',
      is_default: false
    })
  }

  const schema = yup.object({
    name: yup
      .string()
      .required(t('admin.languages.errors.nameRequired'))
      .min(2, t('admin.languages.errors.nameMinLength'))
      .max(50, t('admin.languages.errors.nameMaxLength')),
    code: yup
      .string()
      .required(t('admin.languages.errors.codeRequired'))
      .min(2, t('admin.languages.errors.codeMinLength'))
      .max(5, t('admin.languages.errors.codeMaxLength'))
      .matches(/^[a-z]{2}(-[A-Z]{2})?$/, t('admin.languages.errors.codeFormat')),
    is_default: yup.boolean()
  })

  return { state, setState, schema, reset }
}
