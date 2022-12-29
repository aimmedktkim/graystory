import {DoorContent} from './DoorContent';
import {ObjectContent} from './ObjectContent';

export type PlayProps = {
    // roomData: PlayDataProps,

    roomName: string;
    address: string;
    text: Array<string>;
    objects: Array<ObjectContent>;
    doors: Array<DoorContent>;
    isClear: boolean;
    category: string;
    nextAddress: string;

    contentFocus: number;
    object: object;
    door: object;
    mainFocus: number;
    mainTextContent: string;
    objectIndex: number;
    doorIndex: number;
};
