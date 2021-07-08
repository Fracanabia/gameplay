import React from 'react'
import {
  Alert,
  Image,
  Text,
  View
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ButtonIcon } from '../../components/ButtonIcon'
import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles'
import { Background } from '../../components/Background'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const navegation = useNavigation();
  const { user, signIn } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert(error)
    }
  }

  return (
    <Background>
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
    </Background>
  )
}