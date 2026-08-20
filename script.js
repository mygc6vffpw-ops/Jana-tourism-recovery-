let currentStage = 0;
const totalStages = 4;

function updateProgress() {
    const header = document.getElementById('appHeader');
    const progressText = document.getElementById('progressText');
    const progressBarFill = document.getElementById('progressBarFill');

    if (currentStage === 0) {
        header.style.display = 'none';
        return;
    }

    header.style.display = 'flex';
    progressText.innerText = `0${currentStage} / 0${totalStages}`;
    
    const percentage = (currentStage / totalStages) * 100;
    progressBarFill.style.width = `${percentage}%`;
}

function nextStage() {
    const currentElem = document.getElementById(`stage-${currentStage}`);
    currentElem.classList.remove('active');

    currentStage++;
    
    const nextElem = document.getElementById(`stage-${currentStage}`);
    if (nextElem) {
        nextElem.classList.add('active');
        updateProgress();
    }

    // Trigger subtle confetti on final stage transition
    if (currentStage === 4) {
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 },
            colors: ['#db2777', '#f472b6', '#a78bfa']
        });
    }
}

function selectDestination(element, type) {
    // Highlight selection
    document.querySelectorAll('.choice-card').forEach(card => card.style.borderColor = 'transparent');
    element.style.borderColor = 'var(--primary)';

    const feedbackBox = document.getElementById('destination-feedback');
    const feedbackText = document.getElementById('feedback-text');
    
    feedbackBox.classList.remove('hidden');

    if (type === 'panda') {
        feedbackText.innerHTML = "🐼 Excellent choice. You have selected the objectively correct destination. <strong>+100 happiness</strong>";
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    } else if (type === 'italy') {
        feedbackText.innerHTML = "🍝 Solid choice! Approved for immediate carb recovery.";
    } else {
        feedbackText.innerHTML = "🌊 Absolute peace acquired. No books allowed within 50 km.";
    }
}

function revealFinalMessage() {
    const revealBox = document.getElementById('final-reveal');
    revealBox.classList.remove('hidden');
    
    // Big celebratory confetti burst
    confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#db2777', '#f472b6', '#fb7185', '#a78bfa']
    });
}

// Background Music Control
let isPlaying = false;
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-toggle');

    if (isPlaying) {
        music.pause();
        btn.innerHTML = "🔇 Play Music";
        isPlaying = false;
    } else {
        music.play().then(() => {
            btn.innerHTML = "🔊 Music On";
            isPlaying = true;
        }).catch(err => {
            console.log("Audio playback blocked or failed:", err);
        });
    }
}
