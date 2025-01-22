document.addEventListener("DOMContentLoaded", () => {
    const question = document.querySelector(".question");
    const img = document.querySelector(".img");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
        if (yesBtn.textContent.trim() === "Ok") {
            question.innerHTML = "Yayy!! you can pay here:";
            img.src = "kimage.png"; // Initial image
            yesBtn.textContent = "Done"; // Change button text to "Done"
        } else if (yesBtn.textContent.trim() === "Done") {
            img.src = "https://i.pinimg.com/originals/dc/dd/45/dcdd45bc02f89241babe4ab61ce69f01.gif"; // Change to the GIF URL
            question.innerHTML = "Thank you!!"; // Change question text to "Thank you!!"
        }
    });

    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const padding = 10; // Prevent clipping
        const maxX = window.innerWidth - noBtnRect.width - padding;
        const maxY = window.innerHeight - noBtnRect.height - padding;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
});
