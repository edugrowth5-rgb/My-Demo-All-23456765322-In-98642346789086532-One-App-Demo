// 1. Declare variables with 'let' to allow chapter swapping
let quizData = []; 
let curIdx = 0;
let score = 0;
let answered = false;

// Default load Chapter 1 data on startup
quizData = typeof chapter1Data !== 'undefined' ? chapter1Data : [];

window.onload = () => {
    const savedIdx = localStorage.getItem('qp_idx');
    
    // Check if there is a saved progress within the current quiz range
    if (savedIdx !== null) {
        const idx = parseInt(savedIdx);
        if (idx >= 0 && idx < quizData.length) {
            document.getElementById('resume-box').classList.remove('hidden');
            // We stop here and wait for user to click Resume or Restart
            return; 
        }
    }
    // If no progress, start normally
    initQuiz(false);
};

function initQuiz(resume) {
    document.getElementById('resume-box').classList.add('hidden');
    
    if (resume) {
        // Retrieve exactly where they were
        curIdx = parseInt(localStorage.getItem('qp_idx')) || 0;
        score = parseInt(localStorage.getItem('qp_score')) || 0;
    } else {
        // Clean start
        curIdx = 0;
        score = 0;
        localStorage.removeItem('qp_idx');
        localStorage.removeItem('qp_score');
    }
    
    renderQuestion();
}

// --- CHAPTER LOADING LOGIC ---
function loadChapter(chapterNumber) {
    if(chapterNumber === 1) {
        quizData = chapter1Data;
    } else if(chapterNumber === 2) {
        quizData = chapter2Data;
    } else if(chapterNumber === 3) {
        quizData = gkquizData; 
    } else if(chapterNumber === 4) {
        // Naya Networking Chapter yahan add kiya gaya hai
        quizData = chapter3Data; 
    }
    
    // Baki logic bilkul perfect hai
    curIdx = 0;
    score = 0;
    localStorage.removeItem('qp_idx');
    localStorage.removeItem('qp_score');
    
    initQuiz(false);
    
    const sidebar = document.getElementById('lSidebar');
    if (sidebar) sidebar.classList.add('closed');
}

function renderQuestion() {
    answered = false;
    const data = quizData[curIdx];
    const tile = document.getElementById('mainTile');
    
    if(!data) return;

    tile.innerHTML = `
        <div class="content-controls">
            <div class="font-tools">
                <button onclick="fontSize(1.1)">A+</button>
                <button onclick="fontSize(0.9)">A-</button>
                <button onclick="fullScreen()"><i class="fas fa-expand"></i></button>
            </div>
            <button class="tts-btn" onclick="playQuestion()"><i class="fas fa-volume-up"></i> Listen</button>
        </div>
        <div class="tile-header">
            <span id="progress-text">Question ${curIdx + 1} of ${quizData.length}</span>
            <div class="score-chip">Score: <span id="liveScore">${score}</span></div>
        </div>
        <h2 id="qText">${data.q}</h2>
        <div id="options-grid" class="options-container"></div>
        <div class="footer-nav">
            <button id="prevBtn" onclick="move(-1)" class="nav-btn">Back</button>
            <button id="nextBtn" onclick="move(1)" class="nav-btn">${curIdx === quizData.length - 1 ? 'Finish' : 'Next'}</button>
        </div>
    `;

    const grid = document.getElementById('options-grid');
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'opt';
        btn.innerText = opt;
        btn.onclick = () => checkAns(idx, btn);
        grid.appendChild(btn);
    });

    // Handle visibility of Back button
    document.getElementById('prevBtn').style.visibility = curIdx === 0 ? "hidden" : "visible";
    
    // Save progress as soon as the question is rendered
    localStorage.setItem('qp_idx', curIdx);
}

function checkAns(idx, el) {
    if (answered) return;
    answered = true;
    const correct = quizData[curIdx].correct;
    
    if (idx === correct) {
        el.classList.add('correct');
        score += 10;
    } else {
        el.classList.add('incorrect');
        document.querySelectorAll('.opt')[correct].classList.add('correct');
    }
    
    document.getElementById('liveScore').innerText = score;
    
    // Save updated score immediately
    localStorage.setItem('qp_score', score);
}

function move(step) {
    if (curIdx + step >= 0 && curIdx + step < quizData.length) {
        curIdx += step;
        // Save the new index before rendering
        localStorage.setItem('qp_idx', curIdx);
        renderQuestion();
    } else if (curIdx + step === quizData.length) {
        showResults();
    }
}

function showResults() {
    const tile = document.getElementById('mainTile');
    const totalPossible = quizData.length * 10;
    let feedback = score >= (totalPossible * 0.8) ? "Excellent Achievement! 🌟" : "Good Job! Keep Practicing. 👍";

    tile.innerHTML = `
        <div class="result-screen" style="text-align: center; padding: 20px;">
            <i class="fas fa-trophy" style="font-size: 80px; color: #FFD700; margin-bottom: 20px;"></i>
            <h2 style="color: #FF4757; font-size: 32px;">Quiz Completed!</h2>
            <p style="font-size: 22px; margin-bottom: 20px; color: #555;">${feedback}</p>
            <div style="background: #f1f2f6; padding: 20px; border-radius: 20px; display: inline-block; margin-bottom: 30px; border: 2px solid #ddd;">
                <h3 style="margin: 0; color: #2ED573; font-size: 24px;">Your Final Score: ${score} / ${totalPossible}</h3>
            </div>
            <button onclick="restartQuiz()" class="nav-btn" style="display: block; margin: 0 auto; background: #1E90FF; padding: 15px 40px; font-size: 18px;">Try Again</button>
        </div>
    `;
    // Clear storage only when finished
    localStorage.removeItem('qp_idx');
    localStorage.removeItem('qp_score');
}

function restartQuiz() {
    score = 0;
    curIdx = 0;
    initQuiz(false);
}

function playQuestion() {
    const msg = new SpeechSynthesisUtterance(quizData[curIdx].q);
    window.speechSynthesis.speak(msg);
}

function fontSize(n) {
    const q = document.getElementById('qText');
    const curSize = parseFloat(window.getComputedStyle(q).fontSize);
    q.style.fontSize = (curSize * n) + "px";
}

function fullScreen() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
}

function voiceSearch() {
    const searchInput = document.getElementById('gSearch');
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice search is not supported in this browser.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    searchInput.placeholder = "Listening...";
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
        searchInput.placeholder = "Search Google...";
        doSearch();
    };

    recognition.onerror = () => {
        searchInput.placeholder = "Error. Try again.";
    };

    recognition.onend = () => {
        if (searchInput.placeholder === "Listening...") {
            searchInput.placeholder = "Search Google...";
        }
    };

    recognition.start();
}

function doSearch() {
    const val = document.getElementById('gSearch').value;
    if(val) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(val)}`, '_blank');
    }
}

document.getElementById('menu-toggle').onclick = () => {
    document.getElementById('lSidebar').classList.toggle('closed');
};
