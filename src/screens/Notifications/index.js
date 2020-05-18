import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';
import notificationsdata from './notifications';
import { changeToken } from '../../store/actions/authAction';

import {
    Container, Header, HeaderTitle, HeaderButton, HeaderButtonTitle,
    NotificationsList, MessageContainer, Message, Date, Divider
} from './styles';



const Notifications = ({navigation}) => {
    const [notifications, setNotifications] = useState([]);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadNotifications() {
            const response = await api.post('api/private/history', {
                token
            });

            if (response.data) {

                setNotifications(response.data.notifications.data)
            }
        }

       loadNotifications()
    }, []);

    return (
        <Container>
            <Header>
                <HeaderTitle>Notificações</HeaderTitle>
                <HeaderButton>
                    <HeaderButtonTitle>Configurar</HeaderButtonTitle>
                </HeaderButton>
            </Header>
            <NotificationsList>
            <Divider />
                {
                    notifications.map(item => (
                        <>
                            <MessageContainer 
                                onPress={() => navigation.navigate('Notification', {id: item.id})}
                            >
                                <Message>{item.title}</Message>
                                <Date>{item.description}</Date>
                            </MessageContainer>
                            <Divider />
                        </>
                    ))
                }
            </NotificationsList>
        </Container>
    )
}

export default Notifications