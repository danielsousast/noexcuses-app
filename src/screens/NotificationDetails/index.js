import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {Container} from './styles';
import {useSelector} from 'react-redux';
import api from '../../services/api';
import {Header} from 'react-native-elements';
import {Alert} from 'react-native';
import colors from '../../styles/colors';

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
      })
      .catch(error => {
        Alert.alert('Ocorreu um erro ao carregar a notificação');
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
          backgroundColor: colors.blue,
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
