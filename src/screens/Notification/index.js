import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {Container, BackButton} from './styles';
import {useSelector} from 'react-redux';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Notification = ({navigation, route}) => {
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
        <Icon name="keyboard-backspace" size={26} />
      </BackButton>
      <WebView
        source={{
          uri: notificationLink,
        }}
      />
    </Container>
  );
};

export default Notification;
