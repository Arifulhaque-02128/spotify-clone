const miliToMinutesAndSeconds = (mili) => {
    const minutes = Math.floor(mili/60000);
    const seconds = parseInt(((mili%60000)/1000).toFixed());
    console.log(minutes, seconds)
    return seconds === 60 ? `${minutes+1} : 00`: (seconds < 10 ? `${minutes} : 0${seconds}` : `${minutes} : ${seconds}`);
}

export default miliToMinutesAndSeconds;