import React from 'react'
import { Theme } from '@devon/core'
import useTheme

const getStyles = (theme: Theme) => {
  return
  ;`
    ::-webkit-scrollbar-thumb
    {
      background-color:${theme.backgroundColorMore08};
    }
    body {
      --theme_backgroundColor:${theme.backgroundColor};
      --theme_backgroundColorDarker08:${theme.backgroundColorDarker08};
      --theme_backgroundColorDarker16:${theme.backgroundColorDarker16};
      --theme_backgroundColorLess08:${theme.backgroundColorLess08};
      --theme_backgroundColorLess16:${theme.backgroundColorLess16};
      --theme_backgroundColorLighther08:${theme.backgroundColorLighther08};
      --theme_backgroundColorLighther16:${theme.backgroundColorLighther16};
      --theme_backgroundColorMore08:${theme.backgroundColorMore08};
      --theme_backgroundColorMore16:${theme.backgroundColorMore16};
      --theme_backgroundColorTransparent10:${theme.backgroundColorTransparent10};
      --theme_foregroundColor:${theme.foregroundColor};
      --theme_foregroundColorMuted50:${theme.foregroundColorMuted50};
      background-color:${theme.backgroundColor};
    }
  `
}

export const AppGlobalStyles = () => {
  const theme = useTheme()
  return <style key="global-styles">{getStyles(theme)}</style>
}
