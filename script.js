document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video'); // Updated ID to match your HTML
    const typewriterText = [
        "Thanks for scanning me.",
        "I have a message for you… It’s from the founder.",
        "Should we read it?",
        "Yes: (Tap to continue)",
        "No: (Close tab)",
        "Dear New Yorker,",
        "Imagine a city where every street corner hides a secret, where every alleyway whispers of stories untold...",
        "But here’s the thing—to turn this idea into reality, I need you...",
        "Let’s start by taking a simple one: follow @ScavengeNYC_ on Instagram...",
        "Your journey awaits… but only if you choose to begin."
    ];

    const typewriter = document.getElementById('text-container'); // Updated ID to match your HTML
    let i = 0;
    let j = 0;
    let currentText = '';
    let isDeleting = false;
    let isComplete = false;

    // Create an audio element for typing sound
    const typingSound = new Audio('myaudio.wav'); // Replace with the name of your audio file

    // Function for typing effect
    function type() {
        if (i < typewriterText.length) {
            if (!isDeleting && j <= typewriterText[i].length) {
                currentText = typewriterText[i].slice(0, j++);
                typewriter.textContent = currentText;
                typingSound.play(); // Play typing sound
                setTimeout(type, 150);
            } else if (isDeleting && j > 0) {
                currentText = typewriterText[i].slice(0, j--);
                typewriter.textContent = currentText;
                setTimeout(type, 100);
            } else {
                if (!isDeleting) {
                    setTimeout(() => {
                        isDeleting = true;
                        type();
                    }, 2000);
                } else {
                    isDeleting = false;
                    i++;
                    j = 0;
                    type();
                }
            }
        } else {
            isComplete = true;
            document.getElementById('continue-button').classList.remove('hidden'); // Updated ID to match your HTML
        }
    }

    // Start typing after video ends (around 8-9 seconds with abrupt cut-off)
    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= 8.5) {
            video.style.display = 'none'; // Abrupt cut-off
            type();
        }
    });

    // Continue button functionality
    document.getElementById('continue-button').addEventListener('click', function() {
        if (isComplete) {
            document.getElementById('instagram-button').classList.remove('hidden'); // Updated ID to match your HTML
        }
    });

    // Read again button and Instagram follow functionality
    document.getElementById('instagram-button').addEventListener('click', function() {
        // Place Instagram follow logic here if needed
    });
});
