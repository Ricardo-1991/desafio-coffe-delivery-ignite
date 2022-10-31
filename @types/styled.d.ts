import 'styled-components'
import { DefaultTheme } from '../src/styles/default'

export type ThemeType = typeof DefaultTheme // Configuração TypeScript para criar tipagem pro Default Theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{}
}