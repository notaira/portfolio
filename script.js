const textArray = [
    "Event Planning",
    "Graphic Design",
    "Marketing",
    "Online Marketing",
    "Project Management",
    "Social Media Management",
    "UI Design",
    "UX Design",
    "Web Design",
    "Web Development"

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
