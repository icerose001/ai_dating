function getCompatibilityMessage(score) {
    if (score >= 90) return "非常般配！";
    if (score >= 80) return "很有发展潜力！";
    if (score >= 70) return "还算般配。";
    return "可以多多了解。";
}

document.getElementById('predict-btn').addEventListener('click', function() {
    const person1Name = document.getElementById('person1-name').value;
    const person1Age = document.getElementById('person1-age').value;
    const person2Name = document.getElementById('person2-name').value;
    const person2Age = document.getElementById('person2-age').value;

    if (!person1Name || !person1Age || !person2Name || !person2Age) {
        alert('请填写完整信息！');
        return;
    }

    const compatibility = Math.floor(Math.random() * 41) + 60;

    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        <h3>契合度分析结果</h3>
        <p>${person1Name} 和 ${person2Name} 的契合度为: ${compatibility}%</p>
        <p>${getCompatibilityMessage(compatibility)}</p>
    `;
});