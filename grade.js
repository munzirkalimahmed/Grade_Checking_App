function checkGrade(event) {
    event.preventDefault();
    const percentage = document.getElementById("percentage").value;
    const gradeDisplay = document.getElementById("grade");
    const resultDiv = document.getElementById("result");

    if (percentage >= 80) {
        gradeDisplay.textContent = "A+";
    } else if (percentage >= 70) {
        gradeDisplay.textContent = "A";
    } else if (percentage >= 60) {
        gradeDisplay.textContent = "B";
    } else if (percentage >= 50) {
        gradeDisplay.textContent = "C";
    } else {
        gradeDisplay.textContent = "F";
    }

    resultDiv.style.display = "block";
}