export const formatSeconds = (value) => {
    let seconds = value % 60;
    seconds = ('0' + seconds).slice(-2);

    let minutes = Math.floor(value / 60);

    return minutes + ':' + seconds;
};