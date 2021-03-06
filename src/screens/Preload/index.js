import {CommonActions} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import OneSignal from 'react-native-onesignal';
import {useSelector, useDispatch} from 'react-redux';

import {oneSignalKey} from '../../config/OneSignal';
import {addNotification} from '../../store/actions/userActions';

export default function Preload({navigation}) {
  const signed = useSelector(state => state.auth.signed);
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (signed) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'Home'}],
        }),
      );
    } else {
      navigation.reset({
        index: 1,
        routes: [
          {
            name: 'Login',
          },
        ],
      });
    }
  }, [signed]);

  useEffect(() => {
    OneSignal.init(oneSignalKey);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.setExternalUserId(profile.id);
  }, []);

  function onOpened(openResult) {
    const {title, body, notificationID: id} = openResult.notification.payload;

    console.log('Payload', openResult.notification.payload);

    const notification = {
      id,
      title,
      body,
    };

    dispatch(addNotification(notification));

    /*     navigation.navigate('NotificationDetails', {
      notificationId: notification.id,
    }); */
  }
  return <View />;
}
