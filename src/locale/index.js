import { createI18n } from 'vue-i18n'
import zhCN from './lang/zh_CN'
import zhTW from './lang/zh_TW'
import enUS from './lang/en_US'

const message = {
  zhCN: { ...zhCN },
  zhTW: { ...zhTW },
  enUS: { ...enUS }
}

const i18n = createI18n({
  locale: 'zhCN',
  fallbackLocale: 'enUS',
  legacy: false,
  globalInjection: true,
  messages: message
})

export default i18n
