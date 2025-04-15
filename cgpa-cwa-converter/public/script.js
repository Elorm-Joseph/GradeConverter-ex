
function convert() {
    const value = parseFloat(document.getElementById('inputValue').value);
    const type = document.getElementById('conversionType').value;

    fetch('/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value, type })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('result').innerText = `Result: ${data.result}`;
    })
    .catch(err => {
        document.getElementById('result').innerText = 'Error converting';
    });
}
