import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {
  Container,
  Header,
  Avatar,
  Name,
  Email,
  Menu,
  MenuItem,
  MenuText,
} from './styles';
import {styles} from '../../styles/all';
import colors from '../../styles/colors';
import {signOut} from '../../store/actions/authAction';

const Profile = () => {
  const dispath = useDispatch();

  const handleSignOut = useCallback(async () => {
    dispath(signOut());
  }, []);

  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/15719314?s=460&u=7bc792a5320c7546f3fc239e4d85ca2e3d7d1e3c&v=4',
          }}
          resizeMode="cover"
        />
        <Name>Daniel Sousa</Name>
        <Email>daniel@email.com</Email>
      </Header>
      <Menu>
        <MenuItem style={styles.shadow}>
          <Icon name="help-outline" size={30} color={colors.blue} />
          <MenuText>Suporte</MenuText>
        </MenuItem>
        <MenuItem style={styles.shadow} onPress={handleSignOut}>
          <Icon name="exit-to-app" size={30} color={colors.blue} />
          <MenuText>Sair</MenuText>
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Profile;
