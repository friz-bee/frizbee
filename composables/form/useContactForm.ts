import * as yup from 'yup'
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

export const useContactForm = () => {
  const { t } = useI18n()

  const state = reactive({
    name: '',
    email: '',
    subject: { label: '', value: '' },
    message: ''
  })

  const setState = (data: Partial<typeof state> | null) => {
    if (!data) return
    Object.assign(state, data)
  }

  const reset = () => {
    Object.assign(state, {
      name: '',
      email: '',
      subject: { label: '', value: '' },
      message: ''
    })
  }

  const schema = yup.object({
    name: yup
      .string()
      .required(t('contact.form.errors.name.required'))
      .min(2, t('contact.form.errors.name.min'))
      .max(50, t('contact.form.errors.name.max')),
    email: yup
      .string()
      .email(t('contact.form.errors.email.invalid'))
      .required(t('contact.form.errors.email.required')),
    subject: yup
      .object({
        label: yup.string(),
        value: yup.string()
      })
      .test('is-valid-subject', t('contact.form.errors.subject.required'), (value) => {
        if (!value) return false
        return !!value.value && value.value.trim() !== ''
      }),
    message: yup
      .string()
      .required(t('contact.form.errors.message.required'))
      .min(10, t('contact.form.errors.message.min'))
      .max(1000, t('contact.form.errors.message.max'))
  })

  return { state, setState, schema, reset }
}
