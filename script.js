document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('intro-video');
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

    const typewriter = document.getElementById('text-container');
    let i = 0;
    let j = 0;
    let currentText = '';
    let isComplete = false;

    // Typing sound
    const typingSound = new Audio('myaudio.wav'); // Replace with your actual audio file

    // Function for typing effect with pauses and cursor
    function type() {
        if (i < typewriterText.length) {
            if (j <= typewriterText[i].length) {
                currentText = typewriterText[i].slice(0, j++);
                typewriter.innerHTML = `${currentText}<span class="cursor"></span>`; // Add cursor
                typingSound.play(); // Play typing sound with each key press
                setTimeout(type, currentText.endsWith(".") ? 800 : 120); // Slightly faster, subtle adjustment
            } else {
                // Show continue button after text completes
                document.getElementById('continue-button').style.display = 'inline-block';
                isComplete = true;
            }
        }
    }

    // Start typing after video ends
    video.addEventListener('ended', function() {
        video.style.display = 'none'; // Hide video
        document.getElementById('continue-button').style.display = 'inline-block'; // Show continue button to start typing
    });

    // Continue button interaction to start typing effect and typing sound
    document.getElementById('continue-button').addEventListener('click', function() {
        if (isComplete) {
            // Move to next text and hide button again
            document.getElementById('continue-button').style.display = 'none';
            i++;
            j = 0;
            isComplete = false; // Reset the flag
            type(); // Continue typing
        } else {
            typingSound.play(); // Play typing sound only after user interaction
            type(); // Start typing effect
        }
    });

    // Read again button and Instagram follow functionality
    document.getElementById('instagram-button').addEventListener('click', function() {
        // Instagram follow logic can be added here
    });
});
