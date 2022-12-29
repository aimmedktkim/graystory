import { PlayDataProps } from '../types/PlayDataProps'

export const Room102: PlayDataProps = {
  category: 'room',
  isClear: false,
  nextAddress: '',
  roomName: '방102',
  text: ['방102에 대한 설명'],
  address: 'Room102',
  objects: [
    {
      id: '1',
      title: 'Object1',
      contentType: 'text',
      url: '',
      content: '방102 오브젝트1에 대한 설명',
    },
    {
      id: '2',
      title: 'Object2',
      contentType: 'image',
      url: require('../assets/image/frame335.png'),
      content: '방102 오브젝트2에 대한 설명',
    },
    {
      id: '3',
      title: 'Object3',
      contentType: 'text',
      url: '',
      content: '방102 오브젝트3에 대한 설명',
    },
  ],
  doors: [
    {
      id: '1',
      title: 'Door1',
      answerType: 'text',
      url: '',
      content: '방102 문1에 대한 설명',
      answer: '1',
      nextAddress: 'Room101',
      isLock: true,
    },
    {
      id: '2',
      title: 'Door2',
      answerType: 'text',
      url: '',
      content: '방102 문2에 대한 설명',
      answer: '2',
      nextAddress: 'Room101',
      isLock: false,
    },
    {
      id: '3',
      title: 'Door3',
      answerType: 'text',
      url: '',
      content: '방102 문3에 대한 설명',
      answer: '3',
      nextAddress: 'Room101',
      isLock: true,
    },
  ],
}
