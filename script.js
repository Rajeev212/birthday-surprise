document.getElementById("surpriseBtn").addEventListener("click", () => {

    launchConfetti();

    const music = document.getElementById("backgroundMusic");

    music.volume = 0.60;

    music.play().catch(() => {
        console.log("Music playback was blocked.");
    });
    createMusicControl();

    document.querySelector(".container").innerHTML = `

        <div class="birthday-screen">

            <div class="balloons">

                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>
                <span>🎈</span>

            </div>

            <div class="birthday-content">

                <div class="cake">🎂</div>

                <h1>Happy Birthday,</h1>

                <h2>Neelu ❤️</h2>

                <p>
                    Today is all about celebrating<br>
                    the beautiful person you are.
                </p>

                <button id="continueBtn">
                    Continue ❤️
                </button>

            </div>

        </div>
    `;

    document
        .getElementById("continueBtn")
        .addEventListener("click", showReasons);
});


function showReasons() {
    const reasons = [
        "From the very beginning, there was something about you that I couldn't quite explain. ❤️",

        "I love our never-ending conversations. Somehow, we could talk for hours and still have something to talk about. 🥹",

        "I love your smile. Honestly... it's still my favorite thing about you. ❤️",

        "I love how much you care about me. You've stood by me, helped me whenever I needed you, and comforted me so many times. 🤍",

        "I love how calm you are. The way you mind your own things and respond to people with kindness is something I've always admired about you. 🌸",

        "I love the effort you put into our relationship. I see it, I feel it, and I genuinely appreciate it. ❤️",

        "I love that you're not the judging type. I can tell you things and just be myself around you. 🤍",

        "And honestly... you're ridiculously cute and gorgeous. 😂❤️ What else do you expect me to do about that?"
    ];

    let currentReason = 0;

    document.querySelector(".container").innerHTML = `
        <div class="reasons-screen">
            <div class="heart-animation">❤️</div>

            <h1>Why I Love You</h1>

            <p class="intro">
                There are so many reasons...
                <br>
                but let me tell you a few. 💕
            </p>

            <div class="reason-card">

                <div class="reason-number">
                    A little reason I love you ❤️
                </div>

                <p id="reasonText">${reasons[0]}</p>

                <button id="nextReason">
                    Next ❤️
                </button>

            </div>
        </div>
    `;

    document.getElementById("nextReason").addEventListener("click", () => {

        currentReason++;

        if (currentReason < reasons.length) {

            document.getElementById("reasonText").style.opacity = "0";

            setTimeout(() => {

                document.querySelector(".reason-number").textContent =
                    "Another little reason I love you ❤️";

                document.getElementById("reasonText").textContent =
                    reasons[currentReason];

                document.getElementById("reasonText").style.opacity = "1";

            }, 300);

        } else {

            document.querySelector(".reasons-screen").innerHTML = `
                <div class="heart-animation">💖</div>

                <h1>But you know what?</h1>

                <p class="final-reason">
                    A single reason isn't enough to describe it.
                    <br><br>

                    I love you for all the little things...
                    <br>
                    all the big things...
                    <br>
                    and everything that makes
                    <br>
                    <strong>you... you. ❤️</strong>
                </p>

                <button id="memoryBtn">
                    Our Memory Lane 📸
                </button>
            `;

            document.getElementById("memoryBtn")
                .addEventListener("click", showMemories);
        }
    });
}


function showMemories() {
    const memories = [
        {
            image: "images/memory1.jpg",
            title: "Our First Outing to Repuru",
            caption: "One of the first little adventures that became part of our story. ❤️"
        },
        {
            image: "images/memory3.jpg",
            title: "My Favorite Picture of Us",
            caption: "You look so cute in this. ❤️"
        },
        {
            image: "images/memory4.jpg",
            title: "Our First Visit to MGM",
            caption: "Our first MGM memories together. 🎢❤️"
        },
        {
            image: "images/memory5.jpg",
            title: "Us, Completely Exhausted",
            caption: "Sitting so tired after all those rides. 😂❤️"
        },
        {
            image: "images/memory6.jpg",
            title: "My First Surprise Visit to Chennai",
            caption: "A surprise I will always remember. ❤️"
        },
        {
            image: "images/memory7.jpg",
            title: "Our VGP Memories",
            caption: "Another beautiful little chapter of us. 🎡❤️"
        },
        {
            image: "images/memory8.jpg",
            title: "Our First Diwali",
            caption: "Our first Diwali together. 🪔❤️"
        },
        {
            image: "images/memory9.jpg",
            title: "The Anklets I Brought for You",
            caption: "A small gift that made this moment special. ❤️"
        },
        {
            image: "images/memory10.jpg",
            title: "Your First Visit to Hyderabad",
            caption: "One of my favorite memories of having you here. ❤️"
        },
        {
            image: "images/memory12.jpg",
            title: "My Little Cutie",
            caption: "You're like a cutie in this. 🥹❤️"
        },
        {
            image: "images/memory13.jpg",
            title: "Thank You for the Surprise",
            caption: "Still smiling about this one. ❤️"
        },
        {
            image: "images/memory14.jpg",
            title: "Beauty with a Flower",
            caption: "Just you being effortlessly beautiful. 🌸❤️"
        },
        {
            image: "images/memory16.jpg",
            title: "That Smiley Face",
            caption: "Such a smiley face you got. 🫠❤️"
        },
        {
            image: "images/memory19.jpg",
            title: "Our Candlelight Dinner at Akan",
            caption: "A beautiful evening with you. 🕯️❤️"
        },
        {
            image: "images/memory20.jpg",
            title: "You, Me & Cable Bridge",
            caption: "Another memory I'm glad we made together. 🌉❤️"
        },
        {
            image: "images/memory22.jpg",
            title: "Our First Gym Session Together",
            caption: "Our first workout together. 💪❤️"
        }
    ];

    const memoryCards = memories.map(memory => `
        <div class="memory-item">
            <div class="memory-dot">❤️</div>

            <div class="memory-card">
                <img 
                    src="${memory.image}" 
                    alt="${memory.title}" 
                    class="memory-photo"
                >

                <h2>${memory.title}</h2>

                <p>${memory.caption}</p>
            </div>
        </div>
    `).join("");

    document.querySelector(".container").innerHTML = `
        <div class="memory-screen">

            <h1>Our Memory Lane 📸</h1>

            <p class="memory-intro">
                A few of my favorite moments with you...
                <br>
                and many more memories still waiting for us. ❤️
            </p>

            <div class="timeline">
                ${memoryCards}
            </div>

            <button id="letterBtn">
                There's Something I Want To Tell You 💌
            </button>

        </div>
    `;

    document
        .getElementById("letterBtn")
        .addEventListener("click", showLetter);
}


function showLetter() {
    document.querySelector(".container").innerHTML = `
        <div class="letter-intro-screen">
            <div class="letter-intro-heart">💌</div>

            <h1>One Last Thing...</h1>

            <p>
                I've shown you some of my favorite memories...
                <br>
                but there's something I've been wanting to tell you.
            </p>

            <button id="openLetterBtn">
                Open My Letter ❤️
            </button>
        </div>
    `;

    document
        .getElementById("openLetterBtn")
        .addEventListener("click", openLetter);
}

function openLetter() {
    document.querySelector(".container").innerHTML = `
        <div class="letter-screen">

            <div class="letter-heart">💌</div>

            <h1>For You, Neelu ❤️</h1>

            <div class="letter-card">

                <p class="letter-greeting">Hey Tamatar,</p>

                <p>
                    Once again, Happy Birthday, my love. ❤️
                </p>

                <p>
                    When you told me that you didn't want any more gifts
                    for your birthday, I actually had a few things in mind.
                    But eventually, I stopped those plans and started thinking...
                </p>

                <p>
                    <em>Apart from wishing you, what else can I do?</em>
                </p>

                <p>
                    I wanted to give you something unique.
                </p>

                <p>
                    I started exploring different ideas, and then this thought
                    came to me — why not design something like a website?
                    Something where you could scroll through, see our memories,
                    read what I have to say, and experience my birthday wish
                    in a slightly different way.
                </p>

                <p>
                    And FYI... this would absolutely not have been possible
                    without ChatGPT. 😂
                    <br>
                    <strong>
                        But before you give all the credit to ChatGPT,
                        please consider my efforts also. 😂❤️
                    </strong>
                </p>

                <p>
                    Because once I started doing this, I realized something.
                    Whenever I'm doing something for you or writing about you,
                    my thoughts just turn into actions.
                    And suddenly, I have so many things I want to say to you.
                </p>

                <p>
                    I don't even know how we reached this far.
                </p>

                <p>
                    We met back in June 2018.
                    I still remember seeing you for the first time in Hindi
                    class during our first semester of graduation.
                </p>

                <p>
                    Coming from a boys-only campus after +2 into a co-ed
                    college, I remember thinking...
                    <br>
                    <em>
                        Okay... maybe I'll give this girl a try. 😂
                    </em>
                </p>

                <p>
                    But it wasn't just that.
                </p>

                <p>
                    I liked your ponytail.
                    <br>
                    I liked how calm you were.
                    <br>
                    I liked how you just minded your own things
                    and treated people kindly.
                </p>

                <p>
                    We started texting... and eventually,
                    those texts turned into hours and hours of conversations.
                </p>

                <p>
                    Those never-ending topics. 🥹
                </p>

                <p>
                    Somehow, whatever it was, we always seemed to be
                    on the same page.
                </p>

                <p>
                    And somewhere along the way, I realized there was
                    something magical about you.
                    Something I was genuinely attracted to.
                </p>

                <p>
                    And look at us now.
                </p>

                <p>
                    <strong>We are grown-ups now. ❤️</strong>
                </p>

                <p>
                    We've shared so much together.
                    The movie dates, dinner nights, our train journeys,
                    exploring Chennai together, our first visit to MGM,
                    those days when we were just a budding couple
                    figuring everything out...
                </p>

                <p>
                    And that New Year's Eve concert in 2023.
                </p>

                <p>
                    So many memories.
                </p>

                <p>
                    But if I had to pick a favorite chapter,
                    it would probably be those days we spent together
                    in Chennai.
                </p>

                <p>
                    Thank you for being with me.
                </p>

                <p>
                    Thank you for holding on to me all these years.
                </p>

                <p>
                    Thank you for standing by me, helping me whenever
                    I needed you, and comforting me when I needed it.
                </p>

                <p>
                    I know I make you angry sometimes. 😂
                    <br>
                    Actually... I know I <strong>will</strong> make you
                    angry again. 😭
                </p>

                <p>
                    But I can't bear seeing you angry.
                </p>

                <p>
                    And somehow, I'll still end up making you angry anyway. 🤦‍♂️😂
                </p>

                <p>
                    That's just us.
                </p>

                <p>
                    I want us to travel together.
                    <br>
                    I want us to build a life together.
                    <br>
                    I want us to achieve our goals together.
                    <br>
                    And most importantly, I want many, many more birthdays together.
                </p>

                <p>
                    Maybe one day soon, we'll be standing together and realizing
                    that all these years of birthdays, memories, fights,
                    conversations, train journeys, dates and silly moments
                    brought us to that moment.
                </p>

                <p>
                    I can't wait to experience that with you.
                </p>

                <p>
                    On your 26th birthday, we've officially crossed 25 years
                    of your life... and I hope I get to spend the rest of mine
                    with you.
                </p>

                <p>
                    So let's promise each other that we'll keep working hard
                    for the future we want.
                </p>

                <p>
                    You'll always be my forever favourite.
                </p>

                <p>
                    I know I'll annoy you.
                    <br>
                    I know I'll make you angry.
                    <br>
                    I know we'll have our moments.
                </p>

                <p>
                    But through all of it,
                    <strong>you are my person. ❤️</strong>
                </p>

                <p>
                    There's nothing I'd rather have than a life where
                    I get to keep making memories with you.
                </p>

                <p class="letter-ending">
                    Happy Birthday, my love. ❤️🎂
                </p>

                <p class="signature">
                    Forever yours,<br>
                    <strong>Rajeev ❤️</strong>
                </p>

            </div>

            <p class="final-message">
                This isn't the end of our story...<br>
                It's just another beautiful chapter. ✨
            </p>

            <button id="finalSurpriseBtn">
                One More Surprise ✨
            </button>

        </div>
    `;

    document
        .getElementById("finalSurpriseBtn")
        .addEventListener("click", showFireworks);
}
function launchConfetti() {
    const container = document.createElement("div");

    container.className = "confetti-container";

    document.body.appendChild(container);

    const pieces = 120;

    for (let i = 0; i < pieces; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style.animationDuration =
            (Math.random() * 2 + 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";

        const colors = [
            "#ff4d6d",
            "#ffca3a",
            "#ffffff",
            "#ff85a1",
            "#ff9f1c",
            "#c77dff"
        ];

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        container.appendChild(confetti);
    }

    setTimeout(() => {
        container.remove();
    }, 5000);
}
function showFireworks() {
    document.querySelector(".container").innerHTML = `
        <div class="fireworks-screen">

            <canvas id="fireworksCanvas"></canvas>

            <div class="final-content">

                <div class="final-heart">❤️</div>

                <h1>Happy Birthday, Tamatar!</h1>

                <h2>My forever favourite. ✨</h2>

                <p>
                    We've already made so many memories...
                    <br>
                    and I can't wait to make a lifetime more with you.
                </p>

                <p>
                    <strong>Here's to us. ❤️</strong>
                </p>

            </div>

        </div>
    `;

    startFireworks();
}
function startFireworks() {

    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const fireworks = [];
    const particles = [];

    const colors = [
        "#ff4d6d",
        "#ffca3a",
        "#ffffff",
        "#ff85a1",
        "#c77dff",
        "#4cc9f0"
    ];

    function createFirework() {

        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.55 + 50;

        const color =
            colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < 70; i++) {

            const angle =
                (Math.PI * 2 * i) / 70;

            const speed =
                Math.random() * 5 + 2;

            particles.push({
                x: x,
                y: y,

                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,

                life: 100,

                color: color,

                size: Math.random() * 2 + 1
            });
        }
    }

    function draw() {

        ctx.fillStyle = "rgba(5, 3, 11, 0.20)";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        if (Math.random() < 0.04) {
            createFirework();
        }

        for (let i = particles.length - 1; i >= 0; i--) {

            const particle = particles[i];

            particle.x += particle.vx;
            particle.y += particle.vy;

            particle.vy += 0.04;

            particle.vx *= 0.99;
            particle.vy *= 0.99;

            particle.life -= 1;

            ctx.globalAlpha =
                particle.life / 100;

            ctx.fillStyle =
                particle.color;

            ctx.beginPath();

            ctx.arc(
                particle.x,
                particle.y,
                particle.size,
                0,
                Math.PI * 2
            );

            ctx.fill();

            if (particle.life <= 0) {
                particles.splice(i, 1);
            }
        }

        ctx.globalAlpha = 1;

        requestAnimationFrame(draw);
    }

    draw();

    // Start with a few immediate fireworks
    setTimeout(createFirework, 300);
    setTimeout(createFirework, 900);
    setTimeout(createFirework, 1500);
}
function createMusicControl() {
    const music = document.getElementById("backgroundMusic");

    if (document.getElementById("musicControl")) {
        return;
    }

    const button = document.createElement("button");

    button.id = "musicControl";
    button.className = "music-control";
    button.textContent = "🎵 Music";

    document.body.appendChild(button);

    button.addEventListener("click", () => {

        if (music.paused) {
            music.play();
            button.textContent = "🎵 Music";
        } else {
            music.pause();
            button.textContent = "🔇 Music";
        }

    });
}