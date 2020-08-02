import React, { useEffect } from 'react';
import { View } from 'react-native';
import OneSignal from "react-native-onesignal";
import { useSelector, useDispatch } from 'react-redux';

import { oneSignalKey } from "../../config/OneSignal";
import { addNotification } from '../../store/actions/userActions';

export default function Preload({navigation}){
    const signed = useSelector(state => state.auth.signed);
    const profile = useSelector(state => state.user.profile)
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
      OneSignal.setExternalUserId(profile.id);
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
