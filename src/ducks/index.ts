import {combineReducers} from 'redux';
import PlaySlice from './PlaySlice';

const rootReducer = combineReducers({
    PlaySlice,
});

// rootReducer 함수의 반환값 타입을 RootState type alias로 지정
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
