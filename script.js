const newFacts = [
    "I enjoy painting landscapes.",
    "I have traveled to over 10 countries.",
    "I am a certified scuba diver.",
    "I can solve a Rubik's cube in under a minute.",
    "I love baking bread on weekends."
];

function displayRandomFact() {
    const factDisplayElement = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * newFacts.length);
    factDisplayElement.textContent = newFacts[randomIndex];
}

