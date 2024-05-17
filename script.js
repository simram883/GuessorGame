function togglePasswordVisibility() {
    const passwordField = document.getElementById('guesserNumber');
    const toggleIcon = document.querySelector('.toggle-password i');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function compareNumbers() {
    const guesserNumber = parseInt(document.getElementById('guesserNumber').value);
    const playerNumbers = [
        parseInt(document.getElementById('playerNumber1').value),
        parseInt(document.getElementById('playerNumber2').value),
        parseInt(document.getElementById('playerNumber3').value)
    ];

    const resultElement = document.getElementById('result');
    if ([guesserNumber, ...playerNumbers].some(isNaN)) {
        resultElement.textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    const winners = playerNumbers.map((number, index) => number === guesserNumber ? `Player ${index + 1}` : null).filter(Boolean);
    
    if (winners.length > 0) {
        resultElement.textContent = `${winners.join(' and ')} ${winners.length > 1 ? 'win' : 'wins'} the game!`;
    } else {
        resultElement.textContent = 'No one won the game...';
    }
}
