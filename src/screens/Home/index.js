import React, { useState, useEffect } from 'react';
import {StatusBar} from "react-native";

import { Container, NotificationList, Header, Input } from './styles';
import Notification from '../../components/Notification';
//import Header from "../../components/Header";

const Home = (props) => {
    const [list, setList] = useState([]);
    const [notification, setNotification] = useState([]);

    useEffect(()=>{
            const title = props.navigation.state.params &&
                props.navigation.state.params.title? props.navigation.state.params.title:"vazio";
            
            const body = props.navigation.state.params && 
                props.navigation.state.params.body? props.navigation.state.params.body:"vazfio";
            
                let newList = list;

            newList.push({
                    title,body
            });
            setList(newList)
            
    },[])

    return(
        <Container>
            <Header>
                <Input placeholder="teste"/>
            </Header>
            <NotificationList 
                data={list}
                renderItem={({item}) => <Notification data={item}/>}
                keyExtractor={item => item.id}
            />

            <StatusBar barStyle="dark-content"/>
        </Container>
    )
}

export default Home;
