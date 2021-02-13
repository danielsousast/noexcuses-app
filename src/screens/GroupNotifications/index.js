import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {DrawerActions, useNavigation, useRoute} from '@react-navigation/native';
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

const GroupNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const token = useSelector(state => state.auth.token);
  const groupId = route.params.groupId;

  async function loadNotifications() {
    setLoading(true);
    const response = await api.post(`api/group/${groupId}/history`, {
      token,
    });

    if (response.data) {
      setNotifications(response.data.notifications.data.items);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadNotifications();
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
        dateFormatted: format(parseISO(send_on), 'mm/dd/yyyy'),
      };
    });
  }, [notifications]);

  const handleNavigateToNotification = useCallback(notificationId => {
    navigation.navigate('NotificationDetails', {
      notificationId: notificationId,
    });
  }, []);

  const handleOnRechead = useCallback(async () => {
    loadNotifications();
  }, []);

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
            backgroundColor: '#226bf2',
          }}
          centerComponent={{
            text: 'Notificações',
            style: {fontSize: 18, color: '#fff', fontWeight: '700'},
          }}
          leftComponent={{
            icon: 'chevron-left',
            color: '#fff',
            size: 38,

            onPress: () => navigation.goBack(),
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
        />
      </Container>
      {loading && <Loading />}
    </>
  );
};

export default GroupNotifications;
