import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ClickObject} from '../types/ClickObject';
import {ClickDoor} from '../types/ClickDoor';
import {ContentFocus} from '../types/ContentFocus';
import {MainFocus} from '../types/MainFocus';
import {PlayProps} from '../types/PlayProps';
import {ToAddress} from '../types/ToAddress';

const initialState: PlayProps = {
    // roomData: PlayDataProps,
    isClear: false,
    category: '',
    roomName: '',
    address: '',
    text: [],
    objects: [],
    doors: [],
    nextAddress: '',

    contentFocus: 0,
    object: {},
    door: {},
    mainFocus: 0,
    mainTextContent: '',
    objectIndex: 0,
    doorIndex: 0,
};

const PlaySlice = createSlice({
    name: 'play',
    initialState: initialState,
    reducers: {
        contentFocus(state, action: PayloadAction<ContentFocus>) {
            state.contentFocus = action.payload.contentFocus;
            if (action.payload.contentFocus == 0) {
                state.mainFocus = 0;
            }
        },
        mainFocus(state, action: PayloadAction<MainFocus>) {
            state.mainFocus = action.payload.mainFocus;
        },
        clickObject(state, action: PayloadAction<ClickObject>) {
            state.objectIndex = action.payload.objectIndex;
            state.mainFocus = 1; // getMainFocus(contentType)
        },
        clickDoor(state, action: PayloadAction<ClickDoor>) {
            state.doorIndex = action.payload.doorIndex;
            state.mainFocus = 2;
        },
        toAddress(state, action: PayloadAction<ToAddress>) {
            state.mainFocus = 0;
            // 데이터 넣어주기
            state.nextAddress = action.payload.data.nextAddress;
            state.isClear = action.payload.data.isClear;
            state.category = action.payload.data.category;
            state.roomName = action.payload.data.roomName;
            state.address = action.payload.data.address;
            state.text = action.payload.data.text;
            state.objects = action.payload.data.objects;
            state.doors = action.payload.data.doors;
        },
    },
});

export const {contentFocus, mainFocus, clickObject, clickDoor, toAddress} = PlaySlice.actions;
export default PlaySlice.reducer;
