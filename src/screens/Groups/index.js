import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import GroupItem from '../../components/GroupItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, List} from './styles';
import {requestGroupPermission} from '../../store/actions/userActions';
import Loading from '../../components/Loading';
import {Header} from 'react-native-elements';
import EmptyMessage from '../../components/EmptyMessage';

const Groups = () => {
  const [groupsList, setGroupsList] = useState([]);

  const token = useSelector(state => state.auth.token);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  async function loadGroups() {
    setLoading(true);
    const response = await api.post('api/group/list', {token});

    setGroupsList(response.data.groups.data);
    setLoading(false);
  }

  async function refreshGroups() {
    const response = await api.post('api/group/list', {token});

    setGroupsList(response.data.groups.data);
  }

  useEffect(() => {
    loadGroups();
  }, []);

  function handleGroup(id) {
    navigation.navigate('GroupNotifications', {groupId: id});
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
            backgroundColor: '#226bf2',
          }}
          centerComponent={{
            text: 'Meus Grupos',
            style: {fontSize: 18, color: '#fff', fontWeight: '700'},
          }}
          leftComponent={{
            icon: 'chevron-left',
            color: '#fff',
            size: 38,

            onPress: () => navigation.goBack(),
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
              badge={'Participo'}
            />
          )}
          onRefresh={refreshGroups}
          refreshing={false}
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

export default Groups;
