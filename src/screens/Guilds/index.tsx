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
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />

    </View>
  );
}