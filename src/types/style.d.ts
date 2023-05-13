import 'styled-components'

import { defaultTheme } from '../styles/themes/default'
import { functions } from '../styles/functions'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}