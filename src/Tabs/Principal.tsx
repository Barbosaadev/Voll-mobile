import { VStack, Text, ScrollView, Image, Box, Divider } from 'native-base'
import { EntradaTexto } from '../components/EntradaTexto'
import { entrada } from '../utils/PrincipalEntradaTexto'
import { Titulo } from '../components/Titulo'
import Logo from '../assets/Logo.png'
import { Botao } from '../components/Botao'

export default function Principal() {
  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt='Logo' />

      <Titulo textAlign={'left'} mb={5} color={'blue.500'}>
        Boas-vindas!
      </Titulo>

      <Box shadow={5} borderRadius={'lg'} bgColor={'gray.100'} p={3} mx={5} mb={4}>
        {entrada.map((row) => {
          return <EntradaTexto key={row.id} placeholder={row.placeholder} />
        })}
        <Botao mt={3}>Buscar</Botao>
      </Box>

      <Titulo color={'blue.800'} mt={2}>
        Depoimentos
      </Titulo>
      <Text mt={5} mx={3}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
        rerum facilis est et expedita distinctio.
      </Text>

      <Text textAlign={'center'} mt={2} fontWeight={'bold'} color={'gray.500'}>
        Júlio, 40 anos, São Paulo/SP.
      </Text>

      <Divider mt={2} />

      <Text mt={5} mx={3}>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
        minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
        dolor repellendus.
      </Text>

      <Text textAlign={'center'} mt={2} fontWeight={'bold'} color={'gray.500'}>
        Júlio, 40 anos, São Paulo/SP.
      </Text>

      <Divider mt={2} />

      <Text mt={5} mx={3}>
        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
        maiores alias consequatur aut perferendis doloribus asperiores.
      </Text>

      <Text textAlign={'center'} mt={2} fontWeight={'bold'} color={'gray.500'}>
        Júlio, 40 anos, São Paulo/SP.
      </Text>

      <Divider mt={2} mb={6} />
    </ScrollView>
  )
}
