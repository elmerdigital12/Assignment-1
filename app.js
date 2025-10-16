document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showTimeBtn');
    const display = document.getElementById('timeDisplay');
    let intervalId = null;

    function updateTime() {
        const now = new Date();

        // Format the time in GMT+2
        const options = {
            timeZone: 'Europe/Berlin', // GMT+2 with daylight saving time
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
            updateTime(); // Show immediately on click
            intervalId = setInterval(updateTime, 1000); // Update every second
            button.textContent = 'Stop Clock';
        } else {
            clearInterval(intervalId);
            intervalId = null;
            button.textContent = 'Show Current Time (GMT+2)';
            display.textContent = ''; // Optionally clear the time display

        }
    });
});
