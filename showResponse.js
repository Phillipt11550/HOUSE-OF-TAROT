function showResponse() {
    const cardChoice = document.getElementById("cardChoice").value;
    const responseContainer = document.getElementById("response");

    if (cardChoice === "") {
        responseContainer.textContent = "Please select a card.";
    } else {
        const card = tarotDeck.find(card => card.name === cardChoice);
        if (card) {
            responseContainer.textContent = card.response;
        } else {
            responseContainer.textContent = "Invalid card choice.";
        }
    }
}
function showResponse() {
    const cardChoice = document.getElementById("cardChoice").value;

    if (cardChoice === "") {
        alert("Please select a card.");
    } else {
        const card = tarotDeck.find(card => card.name === cardChoice);
        if (card) {
            alert(card.response);
        } else {
            alert("Invalid card choice.");
        }
    }
}
