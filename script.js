let maleName, femaleName;

function nextStep() {
    maleName = document.getElementById("maleName").value.trim();
    femaleName = document.getElementById("femaleName").value.trim();

    if (maleName === "" || femaleName === "") {
        alert("Please enter both names!");
        return;
    }

    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

function showResult(isLove) {
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "block";

    const resultText = document.getElementById("resultText");
    const heart = document.getElementById("heart");

    if (isLove) {
        resultText.textContent = `${maleName} ❤️ ${femaleName}`;
        document.getElementById("maleNameDisplay").textContent = maleName;
        document.getElementById("femaleNameDisplay").textContent = femaleName;
        heart.style.animation = "beat 1.5s infinite";
    } else {
        resultText.textContent = `${maleName} 💔 ${femaleName}`;
        heart.classList.add("broken-heart");
        setTimeout(() => {
            heart.style.display = "none";
        }, 1000);
    }
}
