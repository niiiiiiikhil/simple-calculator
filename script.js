function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function square() {
    const display = document.getElementById('display');
    display.value = Math.pow(parseFloat(display.value), 2);
}

function squareRoot() {
    const display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    try {
        let result = eval(expression.replace('%', '/100'));
        display.value = result;
        addToHistory(expression, result);
    } catch {
        display.value = 'Error';
    }
}

function addToHistory(expression, result) {
    const historyList = document.getElementById('historyList');
    const item = document.createElement('li');
    item.textContent = `${expression} = ${result}`;
    historyList.appendChild(item);
}

function clearHistory() {
    document.getElementById('historyList').innerHTML = '';
}

function copyResult() {
    const display = document.getElementById('display');
    navigator.clipboard.writeText(display.value).then(() => {
        alert('Copied to clipboard!');
    });
}

// Theme toggle
document.getElementById('themeSwitch').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.','%'];
    if (allowedKeys.includes(key)) {
        appendValue(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
