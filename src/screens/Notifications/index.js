import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {format, parseISO} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {Container, List, BackButton, ScreenTitle} from './styles';

import NotificationItem from '../../components/NotificationItem';
import Loading from '../../components/Loading';
import colors from '../../styles/colors';
import {Button} from 'react-native';
import {Header} from 'react-native-elements';
import EmptyMessage from '../../components/EmptyMessage';
import {ptBR} from 'date-fns/locale';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();
  const token = useSelector(state => state.auth.token);

  async function loadNotifications(reset = false) {
    setLoading(true);

    const nextPage = reset ? 1 : page + 1;

    const response = await api.post('api/private/history', {
      token,
      page: nextPage,
      limit: 5,
    });

    if (response.data) {
      setNotifications(
        reset
          ? response.data.notifications.data.items
          : [...notifications, ...response.data.notifications.data.items],
      );
    }

    setPage(nextPage);
    setLoading(false);
  }

  async function refreshNotifications(reset = false) {
    setRefreshing(true);

    const nextPage = reset ? 1 : page + 1;

    const response = await api.post('api/private/history', {
      token,
      page: nextPage,
      limit: 5,
    });

    if (response.data) {
      setNotifications(
        reset
          ? response.data.notifications.data.items
          : [...notifications, ...response.data.notifications.data.items],
      );
    }

    setPage(nextPage);
    setRefreshing(false);
  }

  useEffect(() => {
    loadNotifications(true);
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => DrawerActions.openDrawer()} title="menu" />
      ),
    });
  }, [navigation]);

  const formatedNotifications = useMemo(() => {
    return notifications.map(({id, title, description, send_on}) => {
      return {
        id,
        title,
        description,
        dateFormatted: format(parseISO(send_on), "dd/MM/yyyy 'às' HH:mm", {
          locale: ptBR,
        }),
      };
    });
  }, [notifications]);

  const handleNavigateToNotification = useCallback(notificationId => {
    navigation.navigate('NotificationDetails', {
      notificationId: notificationId,
    });
  }, []);

  const handleOnRechead = async () => {
    loadNotifications();
  };

  const handleOnRefresh = async () => {
    refreshNotifications(true);
  };

  const renderEmpty = () => {
    if (formatedNotifications.length === 0 && !loading) {
      return <EmptyMessage>Nenhuma notificação encontrada</EmptyMessage>;
    }
  };

  return (
    <>
      <Container>
        <Header
          containerStyle={{
            height: 120,
            backgroundColor: colors.blue,
          }}
          centerComponent={{
            text: 'Notificações',
            style: {fontSize: 18, color: '#fff', fontWeight: '700'},
          }}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            size: 28,

            onPress: () => navigation.openDrawer(),
          }}
        />
        {renderEmpty()}
        <List
          contentContainerStyle={{
            paddingBottom: 10,
          }}
          showsVerticalScrollIndicator={false}
          data={formatedNotifications}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <NotificationItem
              data={item}
              onPress={() => handleNavigateToNotification(item.id)}
            />
          )}
          onEndReached={handleOnRechead}
          onEndReachedThreshold={0.1}
          onRefresh={handleOnRefresh}
          refreshing={false}
        />
      </Container>
      {loading && <Loading />}
    </>
  );
};

export default Notifications;
