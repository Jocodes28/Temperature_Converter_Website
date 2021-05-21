"use strict"

window.onload = function() {
    const convertBtn = document.getElementById("convertBtn");
    convertBtn.onclick = convertBtnClicked;
}

function convertBtnClicked() {
    const celsiusField = document.getElementById("celsius");
    let celsius = Number(celsiusField.value);

    let answer = ((celsius * 1.8) + 32);

    const answerField = document.getElementById("answer");
    answerField.value = answer;
}