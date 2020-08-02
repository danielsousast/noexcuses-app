import React, {useState, useEffect} from 'react';
import {StatusBar, Dimensions, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Header,
  Username,
  Card,
  CardLeft,
  CardCenter,
  CardRight,
  CardTitle,
  CardDescription,
  Welcome,
} from './styles';
import {styles} from '../../styles/all';
import {useSelector, useDispatch} from 'react-redux';
import api from '../../services/api';

const Home = ({navigation}) => {
  const [notifications, setNotifications] = useState([]);
  const token = useSelector(state => state.auth.token);
  const name = useSelector(state => state.user.profile.name);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.post('api/private/history', {
        token,
      });

      if (response.data) {
        setNotifications(response.data.notifications.data);
      }
    }

    // loadNotifications()
  }, []);

  return (
    <Container>
      <Header>
        <Welcome>Olá,</Welcome>
        <Username>Daniel Sousa</Username>
      </Header>

      <Content>
        <Card
          style={styles.shadow}
          onPress={() => navigation.navigate('Notifications')}
          activeOpacity={0.6}>
          <CardLeft color="rgba(89, 116, 255, 0.2)">
            <Icon name="notifications" size={35} color="rgb(89, 116, 255)" />
          </CardLeft>
          <CardCenter>
            <CardTitle>Notificações</CardTitle>
            <CardDescription>Veja todas as suas Notificações</CardDescription>
          </CardCenter>
          <CardRight />
        </Card>

        <Card
          style={styles.shadow}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Groups')}>
          <CardLeft color="rgba(255, 103, 80, 0.2)">
            <Icon name="group" size={35} color="#FF6750" />
          </CardLeft>
          <CardCenter>
            <CardTitle>Grupos</CardTitle>
            <CardDescription>
              Veja os grupos que participa ou pode participar{' '}
            </CardDescription>
          </CardCenter>
          <CardRight />
        </Card>
      </Content>
    </Container>
  );
};

export default Home;
