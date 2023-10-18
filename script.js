const textArray = [
    "test",
    "1",
    "2",
    "3"
]; 

let currentIndex = 0; 

function changeText() {
    const changingTextElements = document.getElementsByClassName("changingText_altText"); 
    for (const element of changingTextElements) {
        element.textContent = textArray[currentIndex];
    }
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 1000);
