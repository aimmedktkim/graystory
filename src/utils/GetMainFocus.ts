export const getMainFocus = (contentType: string): number => {
    if (contentType == 'text') {
        return 1;
    } else if (contentType == 'image') {
        return 2;
    } else {
        return 3;
    }
};
