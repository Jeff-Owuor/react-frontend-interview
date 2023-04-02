import {createStore,applyMiddleware} from "redux"
import appReducers from "./reducers/appReducer"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const persistConfig = {
    key: "root",
    storage
};
const persistedReducer = persistReducer(persistConfig, appReducers);
const store = createStore(persistedReducer, composedEnhancer)
const persistor = persistStore(store);

export default store;