import React from 'react';
import { useDispatch } from 'react-redux';
import DefaultButton from '../../components/DefaultButton'
import { Container } from './styles';
import { signOut } from '../../store/actions/authAction';

const Profile = () => {
    const dispatch = useDispatch()

    function handleSignOut() {
        dispatch(signOut());
    }
    return (
        <Container>
            <DefaultButton title="Sair" onPress={handleSignOut}/>
        </Container>       
    )
}

export default Profile;