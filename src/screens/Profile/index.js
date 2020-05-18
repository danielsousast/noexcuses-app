import React from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Container, MenuItem, MenuLabel, Divider, ProfileCard, User, Label } from './styles';

const Profile = () => {
    const dispatch = useDispatch()

    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <Container>
            <ProfileCard>
                <Icon name="user" size={70} color="#ddd"/>
                <User>Me nome</User>
            </ProfileCard>

            <Label>Ajustes</Label>
            <MenuItem>
                <MenuLabel>Limpar Favoritos</MenuLabel>
            </MenuItem>
            <Divider />
            <MenuItem onPress={handleSignOut}>
                <MenuLabel>Sair</MenuLabel>
            </MenuItem>
            <Divider />
        </Container>       
    )
}

export default Profile;