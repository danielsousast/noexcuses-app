import React, { useEffect } from 'react';
import { View } from 'react-native';
import OneSignal from "react-native-onesignal";
import { useSelector, useDispatch } from 'react-redux';

import { oneSignalKey } from "../../config/OneSignal";
import { addNotification } from '../../store/actions/userActions';

export default function Preload({navigation}){
    const signed = useSelector(state => state.auth.signed);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(signed) {
            navigation.navigate('Home')
        } else {
            navigation.navigate('Login')
        }

    }, [signed]);

    useEffect(()=>{
      OneSignal.init(oneSignalKey);
      OneSignal.addEventListener('opened', onOpened);
      OneSignal.setExternalUserId('1');
  },[])

  function onOpened(openResult){
      const title = openResult.notification.payload.title;
      const body = openResult.notification.payload.body

      const notification = {
        title, body
      }

      dispatch(addNotification(notification));

      navigation.navigate("Notification", {notification});
  }
  return (
    <View />
  );
}
