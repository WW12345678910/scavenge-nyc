// Load the typing sound
var audio = new Audio('sounds/typing-sound.mp3');

// Initialize the first Typed.js instance
var typed = new Typed('#typed-text', {
    strings: [
        "Thanks for scanning me.",
        "I have a message for you… It’s from the founder.",
        "Should we read it?^1000\nYes: (Tap to continue) No: (Close tab)"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: false,
    onStringTyped: function() {
        audio.play();
    },
    onComplete: function() {
        document.getElementById('next-text').style.display = 'block';
    }
});

// Function to handle the next part of the text
function loadNextText() {
    document.getElementById('next-text').style.display = 'none';
    
    var additionalTyped = new Typed('#typed-text', {
        strings: [
            "Dear New Yorker,^500",
            "Imagine a city where every street corner hides a secret, where every alleyway whispers of stories untold. What if I told you that you could be the one to uncover them?^1000\n\n",
            "You see, I have a plan. A vision to turn our beloved city into a playground of exploration and discovery… All for free. Picture this: a city-wide adventure, crafted just for you, where every clue leads you deeper into the heart of New York’s hidden gems. Sounds good, doesn’t it?^1000\n\n",
            "But here’s the thing—to turn this idea into reality, I need you. Without your support, this dream stays just that—a dream. Your participation is the key to unlocking it all.^1000\n\n",
            "Will you take the first step?^1000\n\n",
            "Let’s start by taking a simple one: follow @ScavengeNYC_ on Instagram. Together, we’ll make New York an adventure like never before.^1000\n\n",
            "Your journey awaits… but only if you choose to begin.^1000\n\n(instagram link)"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: false,
        startDelay: 500,
        onStringTyped: function() {
            audio.play();
        },
        onComplete: function() {
            document.getElementById('next-text').style.display = 'block';
        }
    });
}

// Event listener for the "Tap to continue" button
document.getElementById('next-text').addEventListener('click', loadNextText);
