import { applyMiddleware, combineReducers } from 'redux';
import moviesReducer from './movies/reducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';

// Create the Redux Store
const rootReducer = combineReducers({
  movies: moviesReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
