import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Drawer, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DrawerContainer,
  UserInfoSection,
  Caption,
  PreferencesSection,
  User,
  Title,
  UserInfo,
  Avatar,
  AvatarLetter,
} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../store/actions/authAction';
import {useNavigation} from '@react-navigation/native';
import UserImage from '../../images/avatar.png';

export function DrawerContent(props) {
  const dispath = useDispatch();
  const navigation = useNavigation();
  const profile = useSelector(state => state.user.profile);

  const handleSignOut = useCallback(async () => {
    dispath(signOut());

    setTimeout(() => {
      navigation.navigate('Login');
    }, 500);
  }, []);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <DrawerContainer>
          <UserInfoSection>
            <UserInfo>
              <Avatar>
                <AvatarLetter>
                  {profile.name && profile.name.substr(0, 1)}
                </AvatarLetter>
              </Avatar>
              <User>
                <Title numberOfLines={1}>{profile.name && profile.name}</Title>
                <Caption numberOfLines={1}>
                  {profile.email && profile.email}
                </Caption>
              </User>
            </UserInfo>
          </UserInfoSection>

          <Drawer.Section style={{marginTop: 15}}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Notificações"
              onPress={() => {
                props.navigation.navigate('Notifications');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Meus Grupos"
              onPress={() => {
                props.navigation.navigate('Groups');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Grupos Privados"
              onPress={() => {
                props.navigation.navigate('PrivateGroups');
              }}
            />
          </Drawer.Section>
          {/*           <Drawer.Section title="Preferências">
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}>
            <PreferencesSection>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={true} />
              </View>
            </PreferencesSection>
          </TouchableRipple>
        </Drawer.Section> */}
        </DrawerContainer>
      </DrawerContentScrollView>
      <Drawer.Section
        style={{
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1,
        }}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sair do NoExcuses"
          onPress={handleSignOut}
        />
      </Drawer.Section>
    </View>
  );
}
