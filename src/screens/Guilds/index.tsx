import React from 'react';

import {
  FlatList,
  View
} from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendário',
      icon: 'has.png',
      owner: true
    },
    {
      id: '2',
      name: 'Vádio',
      icon: 'has.png',
      owner: false
    }, {
      id: '652',
      name: 'Vádio',
      icon: 'has.png',
      owner: false
    }, {
      id: '4212',
      name: 'Vádio',
      icon: 'has.png',
      owner: false
    }, {
      id: '232',
      name: 'Vádio',
      icon: 'has.png',
      owner: false
    }, {
      id: '211',
      name: 'Vádio',
      icon: 'has.png',
      owner: false
    }, {
      id: '32',
      name: 'Vádio',
      icon: 'has.png',
      owner: false
    }, {
      id: '22',
      name: 'Vádio',
      icon: 'has.png',
      owner: false
    }
  ]
  return (
    <View style={styles.container}>

      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.guilds}
      />

    </View>
  );
}