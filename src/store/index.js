import { createStore, applyMiddleware } from "redux";
import {  persistStore, persistReducer} from "redux-persist";
import createSgaMiddleware from 'redux-saga';

import AsyncStorage from "@react-native-community/async-storage";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const persistedReducer = persistReducer({
    key: 'root',
    storage:AsyncStorage,
    whitelist:['user', 'auth']
}, rootReducer);

const sagaMiddleware = createSgaMiddleware()

const middlewares = applyMiddleware(sagaMiddleware)

const store = createStore(persistedReducer, middlewares);
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga);

export {store, persistor};
