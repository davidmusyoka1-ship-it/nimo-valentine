const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const music = document.getElementById("backgroundMusic");

let canClickYes = false;

// Play music AFTER user interaction (browser safe)
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// YES button dodges for 15 seconds
const dodgeInterval = setInterval(() => {
  if (!canClickYes) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 80;
    yesBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
}, 500);

// Allow YES after 15 seconds
setTimeout(() => {
  canClickYes = true;
  clearInterval(dodgeInterval);
  yesBtn.style.transform = "translateX(-50%)";
}, 15000);

// YES click
yesBtn.addEventListener("click", () => {
  if (canClickYes) {
    message.textContent = "YAAAY 💕 I knew it! Happy Valentine’s Nimoh 💖🥰";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  }
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  noBtn.style.transform = `translateX(${x}px)`;
});
