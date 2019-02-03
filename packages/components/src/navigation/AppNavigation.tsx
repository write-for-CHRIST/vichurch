import React from 'react'
import MainScreen from '../screens/MainScreen'
import LoginScreen from '../screens/LoginScreen'
import {AppGlobalStyles} from './AppGlobalStyles'

export const AppNavigator = () => {
  const user = false;
  return user ? <MainScreen /> : <LoginScreen />
}
