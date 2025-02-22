// script.js
const candle = document.getElementById('candle');
const flame = document.getElementById('flame');
const message = document.getElementById('message');
const wishMessage = document.getElementById('wish-message');
const confettiContainer = document.getElementById('confetti-container');
const balloonContainer = document.getElementById('balloon-container');
const resetButton = document.getElementById('reset-button');
const birthdaySong = document.getElementById('birthday-song');

candle.addEventListener('click', () => {
    flame.style.display = 'none';
    message.innerHTML = 'Selamat Ulang Tahun! 🎉';
    wishMessage.style.opacity = '1';
    createConfetti();
    createBalloons();
    birthdaySong.play();
});

resetButton.addEventListener('click', () => {
    flame.style.display = 'block';
    message.innerHTML = 'Klik lilin untuk memadamkannya!';
    wishMessage.style.opacity = '0';
    confettiContainer.innerHTML = '';
    balloonContainer.innerHTML = '';
    birthdaySong.pause();
    birthdaySong.currentTime = 0;
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 3000);
}

function createBalloons() {
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 4 + 6 + 's';
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        balloonContainer.appendChild(balloon);
    }
}