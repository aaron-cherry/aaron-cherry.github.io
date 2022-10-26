const testButton = document.getElementById("testButton");

const clickTest = () => {
    let buttonDiv = document.getElementById("buttonDiv");
    let p = document.createElement("p");
    p.textContent = "Test";
    buttonDiv.appendChild(p);
}
testButton.onclick = () => {
    clickTest();
};
