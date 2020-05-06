import React, { useState, useEffect } from 'react';
import {StatusBar, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { 
    Container, 
    NotificationList, 
    Header, 
    Title, 
    User, 
    CardView, 
    AlertView, 
    AlertText 
} from './styles';

import Notification from '../../components/Notification';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';
import { changeToken } from '../../store/actions/authAction';
import Card from '../../components/Card';


const screenWidth = Dimensions.get('window').width;
const screenThird = (screenWidth/3) - 12;


const Home = ({navigation}) => {
    const [notifications, setNotifications] = useState([]);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    useEffect(()=>{
        async function loadNotifications() {
            const response = await api.post('api/private/history', {
                token
            });
            const newToken = response.data.token;
            console.log(response)

            dispatch(changeToken(newToken));

            if(response.data) {
                setNotifications(response.data.notifications.data)
            }
        }

        loadNotifications()
    },[])

    return(
        <Container>
            <Header>
                <Title>Olá</Title>
                <User>Luis Eduardo</User>
            </Header>
            <AlertView>
                <AlertText>Você tem 3 notificações não lidas</AlertText>
            </AlertView>
            <CardView>
                <Card width={screenThird}>
                    
                </Card>
                <Card width={screenThird}>
                    <Icon name="add-alert" size={26} color="#151515"/>
                </Card>
                <Card width={screenThird}>
             
                </Card>
            </CardView>
            <Title>Ultimas notificações</Title>
            <NotificationList 
                data={notifications}
                renderItem={({item}) => <Notification data={item}/>}
                keyExtractor={item => item.id}
            />
            <StatusBar barStyle="dark-content"/>
        </Container>
    )
}

export default Home;
