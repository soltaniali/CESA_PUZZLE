function checkInput() {
    const correctString = "ABCDEFGH";
    let inputString = "";
    for (let i = 1; i <= 8; i++) {
        const char = document.getElementById(`char${i}`).value;
        if (char) {
            inputString += char;
        } else {
            inputString += " ";
        }
    }

    const message = document.getElementById('message');
    const nextText = document.getElementById('next-text');

    if (inputString === correctString) {
        message.textContent = "Very nice!";
        message.classList.remove("try-again");
        nextText.style.display = "block";
        nextText.style.opacity = 1;
    } else {
        message.textContent = "Try again!";
        message.classList.add("try-again");
        nextText.style.display = "none";
    }

    message.style.opacity = 1;
}
