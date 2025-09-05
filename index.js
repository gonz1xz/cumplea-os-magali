// Crear confeti
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Crear corazones flotantes
function createHearts() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animationDelay = Math.random() * 4 + 's';
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Mostrar mensaje especial
function showMessage() {
    document.getElementById('messageModal').classList.remove('hidden');
    document.getElementById('messageModal').classList.add('flex');
}

// Ocultar mensaje especial
function hideMessage() {
    document.getElementById('messageModal').classList.add('hidden');
    document.getElementById('messageModal').classList.remove('flex');
}

// Reproducir audio "E MENTIRA"
function playMusic() {
    const button = event.target;
    
    // Crear elemento de audio si no existe
    let audio = document.getElementById('birthday-audio');
    
    if (!audio) {
        audio = document.createElement('audio');
        audio.id = 'birthday-audio';
        audio.preload = 'auto';
        // Cambia esta URL por la de tu audio "E MENTIRA"
        audio.src = 'https://www.myinstants.com/media/sounds/eh-mentira.mp3';
        document.body.appendChild(audio);
    }
    
    // Reproducir o pausar el audio
    if (audio.paused) {
        audio.play().then(() => {
            console.log('🎵 "E MENTIRA" reproduciéndose');
            button.innerHTML = '⏸️ Pausar';
        }).catch(error => {
            console.error('Error al reproducir audio:', error);
            alert('No se pudo reproducir el audio. Asegúrate de que el archivo existe.');
        });
    } else {
        audio.pause();
        button.innerHTML = '🎵 E MENTIRA';
    }
}

// Crear corazones periódicamente
setInterval(createHearts, 500);

// Efecto de confeti al cargar la página
window.addEventListener('load', () => {
    setTimeout(createConfetti, 1000);
});