import { Box, ScrollView } from 'native-base'
import { EntradaTexto } from '../components/EntradaTexto'
import { CardConsulta } from '../components/CardConsulta'
import { Botao } from '../components/Botao'
import { Titulo } from '../components/Titulo'
import { entrada } from '../utils/PrincipalEntradaTexto'
import { appointment } from '../utils/AppointmentList'

export default function Explorar() {
  return (
    <ScrollView flex={1} p={2}>
      <Box shadow={5} borderRadius={'lg'} bgColor={'gray.100'} p={3} mx={5} mt={8} mb={4}>
        {entrada.map((row) => {
          return <EntradaTexto key={row.id} placeholder={row.placeholder} />
        })}
        <Botao mt={3}>Buscar</Botao>
      </Box>

      <Titulo color={'blue.500'} mb={5}>
        Resultado da busca
      </Titulo>

      {appointment.map((appoint) => {
        return (
          <CardConsulta
            key={appoint.id}
            name={appoint.name}
            speciality={appoint.speciality}
            foto={appoint.image}
          />
        )
      })}
    </ScrollView>
  )
}
