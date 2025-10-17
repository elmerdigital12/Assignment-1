document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showTimeBtn');
    const display = document.getElementById('timeDisplay');
    let intervalId = null;
    function updateTime() {
        const now = new Date();
        const options = {
            timeZone: 'Europe/Stockholm', // ska vara gmt +2 //, kan sen lägga till datum för ändring
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const timeInGMT2 = new Intl.DateTimeFormat('en-GB', options).format(now);
        display.textContent = `Current time (GMT+2): ${timeInGMT2}`;
    }
    button.addEventListener('click', () => {
        if (intervalId === null) {
            updateTime();
            intervalId = setInterval(updateTime, 1000);
            button.textContent = 'Stop';
        } else {
            clearInterval(intervalId);
            intervalId = null;
            button.textContent = 'Display Current Time Stockholm (GMT+2)';
            display.textContent = '';

        }
    })
});
// app js = interaktivitet





