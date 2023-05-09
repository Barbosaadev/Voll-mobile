// In development app

import Login from './src/Login'
import { NativeBaseProvider, StatusBar } from 'native-base'
import { THEMES } from './src/styles/themes'

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[900]} />
      <Login />
    </NativeBaseProvider>
  )
}
