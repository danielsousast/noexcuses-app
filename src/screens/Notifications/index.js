import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {Container, List, Header, BackButton, ScreenTitle} from './styles';

import NotificationItem from '../../components/NotificationItem';
import Loading from '../../components/Loading';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    async function loadNotifications() {
      setLoading(true);
      const response = await api.post('api/private/history', {
        token,
      });

      if (response.data) {
        setNotifications(response.data.notifications.data);
      }
      setLoading(false);
    }

    loadNotifications();
  }, []);

  const handleNavigateToNotification = useCallback(notificationId => {
    navigation.navigate('Notification', {notificationId: notificationId});
  }, []);

  return (
    <>
      <Container>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="keyboard-backspace" size={26} />
          </BackButton>
        </Header>
        <ScreenTitle>Notificações</ScreenTitle>
        <List
          contentContainerStyle={{
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
          data={notifications}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <NotificationItem
              data={item}
              onPress={() => handleNavigateToNotification(item.id)}
            />
          )}
        />
      </Container>
      {loading && <Loading />}
    </>
  );
};

export default Notifications;
