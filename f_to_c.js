"use strict"

window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = convertBtnClicked;
}

function convertBtnClicked() {
    const farenheitField = document.getElementById("farenheit");
    let farenheit = Number(farenheitField.value);

    let answer = ((farenheit - 32) * 0.55555555555);

    const answerField = document.getElementById("answer");
    answerField.value = answer;
}
