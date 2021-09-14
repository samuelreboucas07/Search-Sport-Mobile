import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import TitleSection from '../../components/titleSection';
import CardMatch from '../../components/card';
import api from '../../services/api';
import { useAuth } from '../../contexts/auth';
import { ActivityIndicator } from 'react-native-paper';


interface IProps {
  focus: boolean;
}

const MyMatches = ({ focus }: IProps) => {
  const [myMatches, setMyMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    getMyMatches();
  }, [focus]);

  async function getMyMatches() {
    try {
      const { data } = await api.get(`getMyMatches/${user!._id}`);
      if (data && data.matchRegistration) {
        setMyMatches(data.matchRegistration);
        setLoading(false);
      }
    } catch (err: any) {
      setLoading(false);
    }
  }

  const registrationCancel = async (match: string) => {
    setLoading(true);
    try {

      const { data } = await api.post('removePresence', {
        match,
        user: user!._id,
      });
      if (data) {
        getMyMatches();
      }
    } catch (err: any) {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TitleSection title={'Próximos Jogos'} />
        <View style={styles.contentCards}>
          {
            !loading ? (
              <ScrollView>
                {
                  myMatches && myMatches.length ? myMatches.map((item) => (
                    <CardMatch match={item.match} registrationCancel={(match: string) => registrationCancel(match)} />
                  ))
                    : (
                      <Text style={styles.warningEmpty}>Nenhuma partida cadastrada</Text>
                    )
                }
              </ScrollView>
            ) : <ActivityIndicator size="large" />
          }
        </View>
      </View>
    </View>
  )
};

export default MyMatches;