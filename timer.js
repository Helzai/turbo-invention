function currentTime() {
    timeDiv = document.getElementById("currentTime");
    date = new Date();
    milliseconds = Math.floor(date.getMilliseconds() / 1e2) % 10,
    timeDiv.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + milliseconds;

    setInterval(currentTime, 1)
}


// setInterval(currentTime(), 1000);


document.onload = currentTime();
