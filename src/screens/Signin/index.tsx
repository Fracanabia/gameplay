import React from 'react'
import {
  Alert,
  Image,
  Text,
  View,
  ActivityIndicator
} from 'react-native'
import { ButtonIcon } from '../../components/ButtonIcon'
import IllustrationImg from '../../assets/illustration.png'

import { styles } from './styles'
import { Background } from '../../components/Background'
import { useAuth } from '../../hooks/auth'
import { theme } from '../../global/styles/theme'

export function SignIn() {
  const { loading, signIn } = useAuth()

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

          {loading ? <ActivityIndicator color={theme.colors.primary} /> :
            < ButtonIcon
              title='Entrar em discord'
              onPress={handleSignIn}
            />
          }

        </View>
      </View>
    </Background>
  )
}