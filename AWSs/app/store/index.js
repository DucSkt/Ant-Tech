import {applyMiddleware, compose, createStore} from 'redux';
import reducers from '../reducers';
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(sagaMiddleware),
    )
);

sagaMiddleware.run(rootSaga);

export default store;
