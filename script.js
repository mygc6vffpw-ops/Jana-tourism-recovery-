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
    document.querySelectorAll('.choice-card').forEach(card => card.style.borderColor = 'transparent');
    element.style.borderColor = 'var(--primary)';

    const feedbackBox = document.getElementById('destination-feedback');
    const feedbackText = document.getElementById('feedback-text');
    
    feedbackBox.classList.remove('hidden');

    if (type === 'panda') {
        feedbackText.innerHTML = "🐼 Pink fluffy whimjestic panda choice unlocked! Maximum cozy levels achieved. <strong>+100 happiness</strong>";
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    } else if (type === 'donut') {
        feedbackText.innerHTML = "🍩 Legendary choice! Sugar levels boosted to maximum capacity.";
    } else {
        feedbackText.innerHTML = "🌊 Ballito mode activated. Zero Tourism thoughts allowed.";
    }
}

function revealFinalMessage() {
    const revealBox = document.getElementById('final-reveal');
    revealBox.classList.remove('hidden');
    
    confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#db2777', '#f472b6', '#fb7185', '#a78bfa']
    });
}
