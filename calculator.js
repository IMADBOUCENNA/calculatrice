let calcInput = document.getElementById('calcInput');
function insertValue(value) {
calcInput.value += value;
}
function clearInput() {
calcInput.value = '';
}
function calculate() {
try {
let result = eval(calcInput.value);
if (result !== undefined) {
storeOperation(calcInput.value, result);
calcInput.value = result;
}
} catch (error) {
calcInput.value = 'Error';
}
}
async function storeOperation(operation, result) {
    const response = await fetch('store.php', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ operation, result })
        });
        const data = await response.json();
        console.log(data);
        }