export type ThemeName = 'auto' | 'dark' | 'light'

export interface ThemePair {
  id: ThemeName
  color?: string
}

export interface ThemeColors {
  backgroundColor: string
  backgroundColorDarker08: string
  backgroundColorDarker16: string
  backgroundColorLess08: string
  backgroundColorLess16: string
  backgroundColorLighther08: string
  backgroundColorLighther16: string
  backgroundColorMore08: string
  backgroundColorMore16: string
  backgroundColorTransparent10: string
  foregroundColor: string
  foregroundColorMuted50: string
}

export interface Theme extends ThemeColors {
  id: ThemeName
  displayName: string
  isDark: boolean
  invert: () => Theme
}
