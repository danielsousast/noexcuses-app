import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {signOut} from '../../store/actions/authAction';
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

const Profile = () => {
  const dispath = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const handleSignOut = useCallback(async () => {
    dispath(signOut());
  }, []);

  return (
    <Container>
      <Header>
        <Avatar
          source={require('../../images/avatar.png')}
          resizeMode="cover"
        />
        <Name>{profile.name}</Name>
        <Email>{profile.email}</Email>
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
