import {takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../services/api';

export function* groupPermission({payload}) {
    try {
        const {id, token} = payload;

        console.log(payload)
       
    
        yield call(api.post, `api/group/request/${id}`,
        {token}
        );
        alert('Solicitação enviada!');
    } catch (error) {
        alert(error)
    }
}

export default all([
    takeLatest('@user/GROUP_PERMISSION', groupPermission),
])
