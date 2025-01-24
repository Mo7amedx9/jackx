function predictNextRange(type) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    let nextRange = '';
    if (type === 'predict1') {
        nextRange = predict1(num1, num2, num3);
    } else if (type === 'predict2') {
        nextRange = predict2(num1, num2, num3);
    } else if (type === 'predict3') {
        nextRange = predict3(num1, num2, num3);
    }

    document.getElementById('result').innerText = nextRange;
    showPopup();
}

function predict1(num1, num2, num3) {
    const weightedAverage = (num1 * 0.5 + num2 * 0.3 + num3 * 0.2);
    const minFluctuation = (weightedAverage - 0.50).toFixed(2);
    const maxFluctuation = (weightedAverage + 0.50).toFixed(2);
    return `The predicted next range is: ${weightedAverage.toFixed(2)} (min: ${minFluctuation}, max: ${maxFluctuation})`;
}

function predict2(num1, num2, num3) {
    const weightedAverage = (num1 * 0.35 + num2 * 0.25 + num3 * 0.15);
    const baseResult = weightedAverage * 1.48 / (num1 * 0.35 + num2 * 0.25 + num3 * 0.2);
    const riskFactor = 0.1; // حد المخاطرة
    const safeFactor = 0.05; // حد الأمان
    const result = baseResult + (Math.random() * (riskFactor - safeFactor) + safeFactor);
    const minFluctuation = (result - 0.50).toFixed(2);
    const maxFluctuation = (result + 0.50).toFixed(2);
    return `The predicted next range is: ${result.toFixed(2)} (min: ${minFluctuation}, max: ${maxFluctuation})`;
}

function predict3(num1, num2, num3) {
    const weightedAverage = (num1 * 0.25 + num2 * 0.35 + num3 * 0.15);
    const baseResult = weightedAverage * 1.87 / (num1 * 0.25 + num2 * 0.35 + num3 * 0.2);
    const riskFactor = 0.1; // حد المخاطرة
    const safeFactor = 0.05; // حد الأمان
    const result = baseResult + (Math.random() * (riskFactor - safeFactor) + safeFactor);
    const minFluctuation = (result - 0.50).toFixed(2);
    const maxFluctuation = (result + 0.50).toFixed(2);
    return `The predicted next range is: ${result.toFixed(2)} (min: ${minFluctuation}, max: ${maxFluctuation})`;
}

function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
    document.getElementById('result').innerText = '';
}

function showPopup() {
    document.getElementById('popup').style.display = 'block';
    setTimeout(() => {
        document.getElementById('popup').style.display = 'none';
    }, 2000);
}