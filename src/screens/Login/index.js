import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import OneSignal from 'react-native-onesignal';
import {Container, Input, Link, LinkTitle, Loading, Logo} from './styles';
import DefaulButton from '../../components/DefaultButton';
import {Platform} from 'react-native';
import {signInRequest} from '../../store/actions/authAction';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Login = props => {
  const [notificationData, setNotificationData] = useState({});

  const loading = useSelector(state => state.auth.loading);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  //334052c2-8d6f-4de4-a6f8-c4acda3aba9f

  function handleSignIn() {
    dispatch(signInRequest(email, pass));

    setTimeout(() => {
      navigation.navigate('Preload');
    }, 2000);
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Logo>NoExcuses</Logo>
      <Input
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        keyboardAppearance="default"
        onChangeText={t => setEmail(t)}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={t => setPass(t)}
      />
      <DefaulButton title="Logar" onPress={handleSignIn} />

      {loading && (
        <Loading>
          <ActivityIndicator size="large" color="#fff" />
        </Loading>
      )}
    </Container>
  );
};

export default Login;
