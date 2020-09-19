import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {Container, BackButton} from './styles';
import {useSelector} from 'react-redux';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

const NotificationDetails = ({navigation, route}) => {
  const {notificationId} = route.params;
  const token = useSelector(state => state.auth.token);

  const [notificationLink, setNotificationLink] = useState('');

  useEffect(() => {
    api
      .post(`api/notification/${notificationId}/link`, {
        token,
      })
      .then(response => {
        setNotificationLink(response.data.content.link);
      });
  }, []);

  const renderWebview = () => {
    if (notificationLink) {
      return (
        <WebView
          source={{
            uri: notificationLink,
          }}
        />
      );
    }
  };

  return (
    <Container>
      <Header
        containerStyle={{
          height: 100,
          backgroundColor: '#64d8d7',
        }}
        centerComponent={{
          text: 'Notificação',
          style: {fontSize: 18, color: '#fff', fontWeight: '700'},
        }}
        leftComponent={{
          icon: 'chevron-left',
          color: '#fff',
          size: 38,

          onPress: () => navigation.goBack(),
        }}
      />
      {renderWebview()}
    </Container>
  );
};

export default NotificationDetails;
