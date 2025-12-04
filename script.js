// Data Source
const wordData = {
    "level1": [
        { id: 101, en: "apple", ja: "りんご" },
        { id: 102, en: "dog", ja: "犬" },
        { id: 103, en: "cat", ja: "猫" },
        { id: 104, en: "book", ja: "本" },
        { id: 105, en: "school", ja: "学校" }
    ],
    "level2": [
        { id: 201, en: "beautiful", ja: "美しい" },
        { id: 202, en: "library", ja: "図書館" },
        { id: 203, en: "tomorrow", ja: "明日" },
        { id: 204, en: "friend", ja: "友達" },
        { id: 205, en: "music", ja: "音楽" }
    ],
    "level3": [
        { id: 301, en: "experience", ja: "経験" },
        { id: 302, en: "government", ja: "政府" },
        { id: 303, en: "environment", ja: "環境" },
        { id: 304, en: "technology", ja: "技術" },
        { id: 305, en: "culture", ja: "文化" }
    ],
    "level4": [
        { id: 401, en: "appreciate", ja: "感謝する" },
        { id: 402, en: "consequence", ja: "結果" },
        { id: 403, en: "hypothesis", ja: "仮説" },
        { id: 404, en: "inevitable", ja: "避けられない" },
        { id: 405, en: "sophisticated", ja: "洗練された" }
    ]
};

// State
let currentLevel = null;
let activeWords = [];
let currentIndex = 0;
let isFlipped = false;

// DOM Elements
const levelSelection = document.getElementById('level-selection');
const gameArea = document.getElementById('game-area');
const completionMessage = document.getElementById('completion-message');
const flashcard = document.getElementById('flashcard');
const wordEn = document.getElementById('word-en');
const wordJa = document.getElementById('word-ja');
const progressText = document.getElementById('progress-text');
const memorizedCheckbox = document.getElementById('memorized-checkbox');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Level Selection Buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            startGame(level);
        });
    });

    // Card Flip
    flashcard.addEventListener('click', (e) => {
        // Prevent flip if clicking the checkbox
        if (e.target.closest('.memorize-check')) return;

        flipCard();
    });

    // Navigation Buttons
    document.getElementById('prev-btn').addEventListener('click', prevCard);
    document.getElementById('next-btn').addEventListener('click', nextCard);

    // Back Buttons
    document.getElementById('back-to-menu').addEventListener('click', showMenu);
    document.getElementById('back-to-menu-complete').addEventListener('click', showMenu);

    // Memorized Checkbox
    memorizedCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            markAsMemorized();
        }
    });

    // Reset Level
    document.getElementById('reset-level-btn').addEventListener('click', resetLevelProgress);

    // Initial Level Calculation
    calculateTotalLevel();
});

// Game Logic
function startGame(level) {
    currentLevel = level;
    loadWords(level);

    if (activeWords.length === 0) {
        showCompletion();
    } else {
        // Shuffle words for randomness
        shuffleArray(activeWords);
        currentIndex = 0;
        isFlipped = false;
        updateCardDisplay();

        levelSelection.classList.add('hidden');
        completionMessage.classList.add('hidden');
        gameArea.classList.remove('hidden');
    }
}

function loadWords(level) {
    const allWords = wordData[level];
    const memorizedIds = JSON.parse(localStorage.getItem(`memorized_${level}`)) || [];

    // Filter out memorized words
    activeWords = allWords.filter(word => !memorizedIds.includes(word.id));
}

function updateCardDisplay() {
    if (activeWords.length === 0) {
        showCompletion();
        return;
    }

    // Ensure index wraps around
    if (currentIndex >= activeWords.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = activeWords.length - 1;

    const word = activeWords[currentIndex];

    // Reset card state
    flashcard.classList.remove('flipped');
    isFlipped = false;
    memorizedCheckbox.checked = false;

    // Update text with small delay to hide transition if needed, 
    // but here we update immediately as the card is front-facing
    wordEn.textContent = word.en;
    wordJa.textContent = word.ja;

    progressText.textContent = `残り: ${activeWords.length}単語`;
}

function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped');

    if (isFlipped) {
        // Speak English word when flipped to back (or front? Spec says "speak on flip")
        // Usually better to speak when showing English, but let's speak when flipping to back as a reinforcement?
        // Or maybe speak immediately when English is shown?
        // Let's speak the English word when flipping.
        speak(activeWords[currentIndex].en);
    }
}

function nextCard() {
    currentIndex++;
    updateCardDisplay();
}

function prevCard() {
    currentIndex--;
    updateCardDisplay();
}

function markAsMemorized() {
    const word = activeWords[currentIndex];

    // Save to LocalStorage
    const memorizedIds = JSON.parse(localStorage.getItem(`memorized_${currentLevel}`)) || [];
    if (!memorizedIds.includes(word.id)) {
        memorizedIds.push(word.id);
        localStorage.setItem(`memorized_${currentLevel}`, JSON.stringify(memorizedIds));

        // Update total level immediately
        calculateTotalLevel();
    }

    // Remove from active list
    activeWords.splice(currentIndex, 1);

    // Delay slightly to show the check animation, then move to next
    setTimeout(() => {
        if (activeWords.length === 0) {
            showCompletion();
        } else {
            // Current index now points to the next word (since we removed one), 
            // but we need to check bounds
            if (currentIndex >= activeWords.length) {
                currentIndex = 0;
            }
            updateCardDisplay();
        }
    }, 500);
}

function showCompletion() {
    gameArea.classList.add('hidden');
    levelSelection.classList.add('hidden');
    completionMessage.classList.remove('hidden');
}

function showMenu() {
    gameArea.classList.add('hidden');
    completionMessage.classList.add('hidden');
    levelSelection.classList.remove('hidden');

    // Recalculate level when returning to menu (just in case)
    calculateTotalLevel();
}

function resetLevelProgress() {
    if (confirm("このレベルの学習記録をリセットしますか？")) {
        localStorage.removeItem(`memorized_${currentLevel}`);
        calculateTotalLevel(); // Update level after reset
        startGame(currentLevel);
    }
}

function calculateTotalLevel() {
    let totalWords = 0;
    let totalMemorized = 0;

    // Iterate through all levels in wordData
    for (const level in wordData) {
        const wordsInLevel = wordData[level];
        totalWords += wordsInLevel.length;

        const memorizedIds = JSON.parse(localStorage.getItem(`memorized_${level}`)) || [];
        // Ensure we only count valid IDs that exist in the current data (in case data changed)
        const validMemorized = memorizedIds.filter(id => wordsInLevel.some(w => w.id === id));
        totalMemorized += validMemorized.length;
    }

    if (totalWords === 0) return;

    // Calculate percentage (Level 0 - 100)
    const level = Math.floor((totalMemorized / totalWords) * 100);

    // Animate the number
    animateValue("current-level", parseInt(document.getElementById("current-level").innerText), level, 1000);
}

function animateValue(id, start, end, duration) {
    if (start === end) return;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);

    const timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Utilities
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
