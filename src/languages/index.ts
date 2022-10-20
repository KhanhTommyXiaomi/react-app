import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import EnLanguage from './en'
import ViLanguage from './vi'

i18next.use(initReactI18next).init(
  {
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: EnLanguage,
      vi: ViLanguage,
    },
    defaultNS: 'common',
  },
  error => {
    if (error) {
      return console.error(error)
    }
  }
)

export const getLabel = (key: string) => i18next.getFixedT(i18next.language)(key)

export default i18next
