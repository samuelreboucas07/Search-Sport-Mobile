import React, { useEffect, useState } from 'react';
import { BottomNavigation, IconButton, Avatar } from 'react-native-paper';
import { white, header, headerTitle } from '../../constants/color';
import { styles } from './styles';
import { useAuth } from '../../contexts/auth';
import { TouchableOpacity, View } from 'react-native';
import MyMatches from '../myMatches';
import NewMatch from '../addMatch';
import ListMatches from '../ListMatches';

const AddMatch = (setIndex: any) => <NewMatch setIndex={setIndex} />;

const ListAllMatches = (focus: boolean) => <ListMatches focus={focus} />;

const NextMatches = (focus: boolean) => <MyMatches focus={focus} />;

const Home = ({ navigation }: any) => {
  const { user, signOut } = useAuth();
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    { key: 'addingMatch', title: 'Criar', icon: 'plus' },
    { key: 'listMatches', title: 'Buscar', icon: 'home' },
    { key: 'nextMatches', title: 'Próximos jogos', icon: 'history' },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: header,
      },
      headerTitleStyle: {
        fontSize: 17,
      },
      title: defineTitle(user?.name),
      headerTintColor: headerTitle,
      headerLeft: () => (
        <View style={styles.contentAvatar}>
          {
            user && user!.self ? (
              <Avatar.Image size={40} source={{ uri: `data:image/jpeg;base64, ${user!.self}` }} />
            ) : (
              <Avatar.Image size={40} source={require('../../assets/player.png')} />
            )
          }
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity>
          <IconButton
            icon='location-exit'
            color={headerTitle}
            size={20}
            onPress={() => signOut()}
          />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  const defineTitle = (name?: string) => {
    return `Bem-vindo ${name!.trim().split(' ')[0] || ''}`;
  };

  const renderScene = BottomNavigation.SceneMap({
    addingMatch: () => AddMatch(setIndex),
    listMatches: () => ListAllMatches(index === 1 ? true : false),
    nextMatches: () => NextMatches(index === 2 ? true : false),
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.bottomBar}
      activeColor={white}
    />
  );
};

export default Home;