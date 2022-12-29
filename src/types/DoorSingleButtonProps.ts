export type DoorSingleButtonProps = {
    data: {
        id: string;
        title: string;
        answerType: string;
        url: string;
        content: string;
        answer: string;
        nextAddress: string;
        isLock: boolean;
    };
    doorIndex: number;
};
