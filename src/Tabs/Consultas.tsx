// em desenvolvimento!

import { Divider, ScrollView } from 'native-base'
import { CardConsulta } from '../components/CardConsulta'
import { Titulo } from '../components/Titulo'
import { Botao } from '../components/Botao'
import { appointment } from '../utils/AppointmentList'

export default function Consultas() {
  return (
    <ScrollView p={5}>
      <Titulo color={'blue.500'} mb={5}>
        Minhas consultas
      </Titulo>

      <Botao mt={5} mb={5}>
        Agendar nova consulta
      </Botao>

      <Titulo fontSize={'lg'} alignSelf={'flex-start'} mb={2} color={'blue.500'}>
        Próximas consultas
      </Titulo>
      <CardConsulta
        name='Dr. Guilherme'
        speciality='Cardiologista'
        data='16/05/2023'
        foto='https://avatars.githubusercontent.com/u/83675850?v=4'
        wasScheduled
      />

      <Divider mt={5} />

      <Titulo fontSize={'lg'} alignSelf={'flex-start'} mb={2} color={'blue.500'}>
        Consultas passadas
      </Titulo>

      {appointment.map((appoint) => {
        return (
          <CardConsulta
            key={appoint.id}
            name={appoint.name}
            speciality={appoint.speciality}
            data={appoint.data}
            foto={appoint.image}
            wasAttended
          />
        )
      })}
    </ScrollView>
  )
}
