import React, {useContext} from 'react'
import {Theme} from '@devon/core'
//import {defaultThemePair} from 
export type ThemeProviderState = Theme

export const ThemeContext = React.createContext<ThemeProviderState>()

export const useTheme = () => useContext(ThemeContext)
