import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import GroupItem from '../../components/GroupItem';
import {Container, List} from './styles';
import {requestGroupPermission} from '../../store/actions/userActions';
import Loading from '../../components/Loading';
import {Header} from 'react-native-elements';
import colors from '../../styles/colors';
import EmptyMessage from '../../components/EmptyMessage';

const PrivateGroups = () => {
  const [groupsList, setGroupsList] = useState([]);

  const token = useSelector(state => state.auth.token);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    async function loadGroups() {
      setLoading(true);
      const response = await api.post('api/group/all', {token});

      setGroupsList(response.data.groups.data);
      setLoading(false);
    }

    loadGroups();
  }, []);

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

  const renderEmpty = () => {
    if (groupsList.length === 0 && !loading) {
      return <EmptyMessage>Nenhum grupo encontrado</EmptyMessage>;
    }
  };

  return (
    <>
      <Container>
        <Header
          containerStyle={{
            height: 120,
            backgroundColor: colors.blue,
          }}
          centerComponent={{
            text: 'Grupos Privados',
            style: {fontSize: 18, color: '#fff', fontWeight: '700'},
          }}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            size: 28,

            onPress: () => navigation.openDrawer(),
          }}
        />
        {renderEmpty()}
        <List
          contentContainerStyle={{
            paddingBottom: 10,
          }}
          data={groupsList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <GroupItem
              grupo={item}
              onPress={() => handleGroup(item.id)}
              badge="Não participo"
            />
          )}
        />
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

export default PrivateGroups;
