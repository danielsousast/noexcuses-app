import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions,StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";


import {
    Container,
    Header,
    Title,
    User,
    Scroll,
    SmallItem,
    SmallDescription, 
    BigItem
} from './styles';

import { useSelector, useDispatch } from 'react-redux';
import api from '../../services/api';

const Home = ({ navigation }) => {
    const [notifications, setNotifications] = useState([]);
    const token = useSelector(state => state.auth.token);
    //const name = useSelector(state => state.user.profile.name);
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

       // loadNotifications()
    }, [])

    return (
        <Container>
            <Header>
                <Title>Olá</Title>
                <User>teste</User>
            </Header>
            <Title>O que você está procurando?</Title>
            <Scroll horizontal>
                <SmallItem onPress={()=>navigation.navigate('Notifications')} style={styles.sombra}>
                    <Icon name="bell" color="#21a9ed" size={35}/>
                    <SmallDescription>Notificações</SmallDescription>
                </SmallItem>
                <SmallItem onPress={()=>navigation.navigate('Groups')} style={styles.sombra}>
                    <Icon name="people" color="#21a9ed" size={35}/>
                    <SmallDescription>Grupos</SmallDescription>                    
                </SmallItem>
                <SmallItem onPress={()=>navigation.navigate('Favorite')} style={styles.sombra}>
                    <Icon name="heart" color="#21a9ed" size={35}/>
                    <SmallDescription>Favoritos</SmallDescription> 
                </SmallItem>
            </Scroll>

            <StatusBar barStyle="dark-content" />
        </Container>
    )
}

const styles = StyleSheet.create({
  sombra: {
    shadowColor: "#000",
    shadowOffset: {
        width: 5,
        height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 10,
  }
})

export default Home;
