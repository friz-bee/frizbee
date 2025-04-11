import * as yup from 'yup'

export const useAdminForm = () => {
  const { t } = useI18n()

  const state = reactive({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const setState = (data: Partial<typeof state> | null) => {
    if (!data) return
    Object.assign(state, data)
  }

  const reset = () => {
    Object.assign(state, {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  const schema = yup.object({
    name: yup
      .string()
      .required(t('admin.users.errors.nameRequired'))
      .min(2, t('admin.users.errors.nameMinLength')),
    email: yup
      .string()
      .email(t('admin.users.errors.invalidEmail'))
      .required(t('admin.users.errors.emailRequired')),
    password: yup
      .string()
      .required(t('admin.users.errors.passwordRequired'))
      .min(8, t('admin.users.errors.passwordMinLength'))
      .max(50, t('admin.users.errors.passwordMaxLength'))
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        t('admin.users.errors.passwordComplex')
      ),
    confirmPassword: yup
      .string()
      .required(t('admin.users.errors.confirmPasswordRequired'))
      .oneOf([yup.ref('password')], t('admin.users.errors.passwordsMatch'))
  })

  return { state, setState, schema, reset }
}
