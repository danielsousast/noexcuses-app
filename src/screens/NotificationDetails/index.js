import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {Container, BackButton} from './styles';
import {useSelector} from 'react-redux';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="keyboard-backspace" size={26} color="#3c4560" />
      </BackButton>
      <WebView
        source={{
          uri: `https://devkode.com.br/api/notification/${notificationId}`,
        }}
      />
    </Container>
  );
};

export default NotificationDetails;
