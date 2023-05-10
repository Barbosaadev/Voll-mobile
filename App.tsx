// In development app
import Rotas from './src/utils/Rotas'
import { NativeBaseProvider, StatusBar } from 'native-base'
import { THEMES } from './src/styles/themes'

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[900]} />
      <Rotas />
    </NativeBaseProvider>
  )
}
