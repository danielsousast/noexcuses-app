import React, { useState, useEffect } from 'react';
import {StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import api from '../../services/api';
import Group from '../../components/Group';

import {
    Container,
    Header,
    HeaderTitle,
    ListGroup,
    Menu,
    MenuItemLeft,
    MenuItemRight,
    MenuLabel,
    GroupArea
} from './styles';


const Groups = () => {
    const [groupsData, setGroupData] = useState([]);
    const [privateGroups, setPrivateGroups] = useState([]);
    const token = useSelector(state => state.auth.token);
    const [active, setActive] = useState(1)

    useEffect(() => {
        async function loadGroups() {
            const responseAll = await api.post('api/group/all', { token })
            const responsePrivate = await api.post('api/group/list', { token })

            if (responseAll.data) {
                setGroupData(responseAll.data.groups.data)
            }
            if (responsePrivate.data) {
                setPrivateGroups(responsePrivate.data.groups.data)
            }
        }

        loadGroups();

    }, [])

    function toogleActive(aba) {
        setActive(aba);
    }

    return (
        <Container>
            <Header>
                <HeaderTitle>Grupos</HeaderTitle>

            </Header>
            <Menu>
                <MenuItemLeft active={active} onPress={() => toogleActive(1)}>
                    <MenuLabel>Todos</MenuLabel>
                </MenuItemLeft>
                <MenuItemRight active={active} onPress={() => toogleActive(2)}>
                    <MenuLabel>Que participo</MenuLabel>
                </MenuItemRight>
            </Menu>

            {active == 1 &&
                <ListGroup
                    data={groupsData}
                    renderItem={({ item }) => <Group data={item} style={styles.sombra}/>}
                />
            }

            {active == 2 &&
                <ListGroup
                    data={privateGroups}
                    renderItem={({ item }) => <Group data={item} style={styles.sombra}/>}
                    keyExtractor={(item) => String(item.id)}
                />
            }
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

export default Groups;