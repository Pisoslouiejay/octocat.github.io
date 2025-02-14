let surpriseCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    createBackgroundHearts();
    document.getElementById("startButton").addEventListener("click", startHeartFlood);
    document.getElementById("heartImageButton").addEventListener("click", showHeartImage);
    document.getElementById("surpriseButton").addEventListener("click", showSurprise);
});

function showSurprise() {
    let container = document.getElementById("surpriseContainer");
    let surprises = [
        "I love you more than words can say! 😘",
        "You are my sunshine on a rainy day ☀️🌧️",
        "Every heartbeat of mine beats for you ❤️",
        "You're the most beautiful thing in my life! 💕",
        "I can't wait to make more memories with you! 🎉",
        "Forever and always, you have my heart 💖",
        "Sorry I can't give you anything :<",
        "I hope you will stay by my side forever"
    ];

    if (surpriseCount < surprises.length) {
        let newSurprise = document.createElement("p");
        newSurprise.className = "surprise";
        newSurprise.innerText = surprises[surpriseCount];
        container.appendChild(newSurprise);
        
        setTimeout(() => {
            newSurprise.style.opacity = "1";
            newSurprise.style.transform = "translateY(0)";
        }, 100);
        
        surpriseCount++;
    }
}

function startHeartFlood() {
    let container = document.body;
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.className = "hearts";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.fontSize = Math.random() * 2 + 1 + "rem";
        heart.style.position = "absolute";
        heart.style.opacity = "1";
        heart.style.transition = "opacity 3s ease-in-out";
        container.appendChild(heart);
    }
    setTimeout(() => {
        document.querySelectorAll(".hearts").forEach(heart => {
            heart.style.opacity = "0";
        });
        setTimeout(() => {
            document.querySelectorAll(".hearts").forEach(heart => heart.remove());
        }, 3000);
    }, 1000);
}

let imageIndex = 0;
const heartImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

function showHeartImage() {
    let container = document.body;
    let image = document.getElementById("heartImage");
    if (!image) {
        image = document.createElement("img");
        image.id = "heartImage";
        image.className = "heart-image";
        container.appendChild(image);
    }
    image.src = heartImages[imageIndex];
    image.style.opacity = "1";
    image.style.transform = "translate(-50%, -50%) scale(1)";
    setTimeout(() => {
        image.style.opacity = "0";
        image.style.transform = "translate(-50%, -50%) scale(0)";
    }, 2000);
    imageIndex = (imageIndex + 1) % heartImages.length;
}

function createBackgroundHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "background-heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 1.5 + 1 + "rem";
        heart.style.opacity = "0.8";
        heart.style.animation = "fall 5s linear infinite";
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
}
