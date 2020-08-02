import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import GroupItem from '../../components/GroupItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  GroupMenu,
  MenuItem,
  MenuItemText,
  ScreenTitle,
  SectionTitle,
  List,
  Header,
  BackButton,
} from './styles';
import {requestGroupPermission} from '../../store/actions/userActions';
import Loading from '../../components/Loading';

const Groups = () => {
  const [groupsData, setGroupData] = useState([]);
  const [privateGroups, setPrivateGroups] = useState([]);
  const token = useSelector(state => state.auth.token);
  const [loading, setLoading] = useState(false);

  const [active, setActive] = useState(1);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    async function loadGroups() {
      setLoading(true);
      const responseAll = await api.post('api/group/all', {token});
      const responsePrivate = await api.post('api/group/list', {token});

      if (responseAll.data) {
        setGroupData(responseAll.data.groups.data);
      }
      if (responsePrivate.data) {
        setPrivateGroups(responsePrivate.data.groups.data);
      }
      setLoading(false);
    }

    loadGroups();
  }, []);

  function toogleActive(aba) {
    setActive(aba);
  }

  function handleGroup(id) {
    Alert.alert(
      'Grupo Privado',
      'Deseja solicitar permissão?',
      [
        {
          text: 'Sim',
          onPress: () => dispatch(requestGroupPermission(id, token)),
          style: 'cancel',
        },
        {text: 'Não', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  return (
    <>
      <Container>
        <Header>
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="keyboard-backspace" size={26} />
          </BackButton>
        </Header>
        <ScreenTitle>Grupos</ScreenTitle>
        <GroupMenu>
          <MenuItem
            color="#FF6750"
            activeOpacity={0.6}
            onPress={() => setActive(1)}>
            <MenuItemText>Grupos que participo</MenuItemText>
          </MenuItem>
          <MenuItem
            color="#5974FF"
            activeOpacity={0.6}
            onPress={() => setActive(2)}>
            <MenuItemText>Grupos para participar</MenuItemText>
          </MenuItem>
        </GroupMenu>
        {active === 1 && (
          <>
            <SectionTitle>Grupos que paricipo</SectionTitle>
            <List
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingBottom: 20,
              }}
              data={groupsData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <GroupItem grupo={item} onPress={() => {}} badge="Participa" />
              )}
            />
          </>
        )}
        {active === 2 && (
          <>
            <SectionTitle>Grupos para participar</SectionTitle>
            <List
              contentContainerStyle={{
                paddingHorizontal: 20,
              }}
              data={groupsData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <GroupItem
                  grupo={item}
                  onPress={() => handleGroup(item.id)}
                  badge="Não participa"
                />
              )}
            />
          </>
        )}
      </Container>
      {loading && <Loading />}
    </>
  );
};

const styles = StyleSheet.create({
  sombra: {
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default Groups;
