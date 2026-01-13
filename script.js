function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const ampm = hours >= 12 ? 'P.M.' : 'A.M.';
    hours = hours % 12 || 12;

    document.getElementById('time').textContent = `${hours}:${minutes}`;
    document.getElementById('ampm').textContent = ampm;
}

updateClock();
setInterval(updateClock, 1000);
