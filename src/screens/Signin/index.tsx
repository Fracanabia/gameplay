import React from 'react'
import {
  Image,
  Text,
  View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ButtonIcon } from '../../components/ButtonIcon'
import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles'

export function SignIn() {
  const navegation = useNavigation();

  function handleSignIn() {
    navegation.navigate('Home')
  }

  return (
    <View
      style={styles.container}>

      <Image
        style={styles.image}
        source={IllustrationImg}
        resizeMode="stretch"
      />

      <View style={styles.content}>

        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title='Entrar em discord'
          onPress={handleSignIn}
        />

      </View>

    </View>
  )
}