import {PlayDataProps} from '../types/PlayDataProps';

export const Room101: PlayDataProps = {
    category: 'room',
    isClear: false,
    nextAddress: '',
    roomName: '방101',
    text: ['방101에 대한 설명'],
    address: 'Room101',
    objects: [
        {
            id: '1',
            title: 'Object1',
            contentType: 'text',
            url: '',
            content: '방101 오브젝트1에 대한 설명',
        },
        {
            id: '2',
            title: 'Object2',
            contentType: 'image',
            url: require('../assets/image/frame335.png'),
            content: '방101 오브젝트2에 대한 설명',
        },
        {
            id: '3',
            title: 'Object3',
            contentType: 'text',
            url: '',
            content: '방101 오브젝트3에 대한 설명',
        },
    ],
    doors: [
        {
            id: '1',
            title: 'Door1',
            answerType: 'text',
            url: '',
            content: '방101 문1에 대한 설명',
            answer: '1',
            nextAddress: 'Room102',
            isLock: true,
        },
        {
            id: '2',
            title: 'Door2',
            answerType: 'text2',
            url: '',
            content: '방101 문2에 대한 설명',
            answer: '2',
            nextAddress: 'Stroy0',
            isLock: false,
        },
    ],
};
