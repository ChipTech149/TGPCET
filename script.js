let currentSlide = 1;

function nextSlide() {
    document.getElementById(`slide${currentSlide}`).classList.remove('active');
    currentSlide++;
    if (document.getElementById(`slide${currentSlide}`)) {
        document.getElementById(`slide${currentSlide}`).classList.add('active');
    }
}

function startRecording() {
    document.getElementById('recordButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    alert("Recording started...");
    // Real recording logic can be added here
}

function stopRecording() {
    document.getElementById('recordButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    alert("Recording stopped.");
    // Stop recording logic can be added here
}

function playAudio() {
    alert("Playing audio...");
    // Add logic to play recorded audio
}

function generateText() {
    const text = "This is your generated text from audio.";
    document.getElementById('generatedText').innerText = text;
}

function rate(stars) {
    alert(`Thank you for rating us ${stars} star(s)!`);
}
