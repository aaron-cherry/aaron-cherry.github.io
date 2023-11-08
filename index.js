const testButton = document.getElementById("testButton");
const testNumber = 0;

const clickTest = () => {
    testNumber += 1;
    let buttonDiv = document.getElementById("buttonDiv");
    let p = document.createElement("p");
    p.textContent = "Test" + testNumber.toString;
    buttonDiv.appendChild(p);
}
testButton.onclick = () => {
    clickTest();
};
