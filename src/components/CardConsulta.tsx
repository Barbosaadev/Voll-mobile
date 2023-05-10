import { Text, Avatar, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardProps {
  name: string
  foto: string
  speciality: string
  data?: string
  wasAttended?: boolean
  wasScheduled?: boolean
}

export function CardConsulta({
  name,
  foto,
  data,
  speciality,
  wasAttended,
  wasScheduled,
}: CardProps) {
  return (
    <VStack
      w={'100%'}
      bg={wasAttended ? 'blue.100' : 'white'}
      p={'5'}
      borderRadius={'lg'}
      shadow={2}
      mb={7}
      >
      <VStack flexDir={'row'}>
        <Avatar size={'lg'} source={{ uri: foto }} />
        <VStack pl={4}>
          <Text fontSize={'md'} bold>
            {name}
          </Text>
          <Text>{speciality}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>

      <Botao mt={4}>{wasScheduled ? 'Cancelar' : 'Agendar consulta'}</Botao>
    </VStack>
  )
}
