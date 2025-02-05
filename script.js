let surpriseCount = 0;

function showSurprise() {
    let container = document.getElementById("surpriseContainer");

    // List of surprises to reveal one by one
    let surprises = [
        "I love you more than words can say! 😘",
        "You are my sunshine on a rainy day ☀️🌧️",
        "Every heartbeat of mine beats for you ❤️",
        "You're the most beautiful thing in my life! 💕",
        "I can't wait to make more memories with you! 🎉",
        "Forever and always, you have my heart 💖"
    ];

    if (surpriseCount < surprises.length) {
        let newSurprise = document.createElement("p");
        newSurprise.className = "surprise";
        newSurprise.innerText = surprises[surpriseCount];
        container.appendChild(newSurprise);
        surpriseCount++;
    } else {
        createFallingHeart();
    }
}
document.getElementById("startButton").addEventListener("click", startAnimation);

function startAnimation() {
    let container = document.getElementById("animationContainer");
    container.innerHTML = ""; // Clear previous hearts

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "hearts";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "90vh";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }
    
    setTimeout(() => {
        document.getElementById("loveMessage").classList.add("visible");
    }, 3000);
    
    // Loop the animation every 6 seconds
    setTimeout(startAnimation, 4000);
}
