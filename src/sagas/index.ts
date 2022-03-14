import movieWatchers from './movies/sagasWatchers';
import { all } from 'typed-redux-saga';

export function* rootSaga() {
  yield all([...movieWatchers]);
}
