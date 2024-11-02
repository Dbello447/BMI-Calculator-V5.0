function calculateBmi() {
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    bmi = parseFloat(weight / (height / 100) ** 2)

    document.getElementById('result').innerHTML = bmi.toFixed(2);
}

function reload() {
    document.getElementById('result').innerText = "";
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
}