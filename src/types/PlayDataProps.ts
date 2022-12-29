import { DoorContent } from "./DoorContent";
import { ObjectContent } from "./ObjectContent";

export type PlayDataProps = {
    category: string, // room, story
    roomName: string,
    text: Array<string>,
    address: string,
    objects: Array<ObjectContent>,
    doors: Array<DoorContent>,
    isClear: boolean,
    nextAddress: string, // only story
};