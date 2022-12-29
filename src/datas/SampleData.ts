import { PlayDataProps } from "../types/PlayDataProps"

export const SampleData: PlayDataProps = {
    category: 'room',
    nextAddress: 'Stroy0',
    isClear: false,
    roomName: "방1",
    text: [`요 텍스트가 나왔다는건 뭔가 잘못됬다는 뜻`],
    address: "SampleData",
    objects: [
        {
            id: '1',
            title: 'Object1',
            contentType: "text",
            url: '',
            content: 'SampleData 오브젝트1에 대한 설명',
        },
        {
            id: '2',
            title: 'Object2',
            contentType: "image",
            url: require('../assets/image/frame335.png'),
            content: 'SampleData 오브젝트2에 대한 설명',
        },
        {
            id: '3',
            title: 'Object3',
            contentType: "text",
            url: '',
            content: 'SampleData 오브젝트3에 대한 설명',
        }
    ],
    doors: [
        {
            id: '1',
            title: 'Door1',
            answerType: "text",
            url: '',
            content: 'SampleData 문1에 대한 설명',
            answer: 'answer1',
            nextAddress: '2',
            isLock: true,
        },
        {
            id: '2',
            title: 'Door2',
            answerType: "text2",
            url: '',
            content: 'SampleData 문2에 대한 설명',
            answer: 'answer2',
            nextAddress: '2',
            isLock: false,
        }
    ]
};