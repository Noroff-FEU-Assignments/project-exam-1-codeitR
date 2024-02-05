import { fetchPostData } from "../components/data.js";
import { printCards } from "../components/printCards.js";
const latestPost = document.getElementById("latest-post");
const mostRead = document.getElementById("most_read");
const carouselNext = document.getElementById("next");
const carouselPrev = document.getElementById("prev");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// 12 cards / 2 = 6 slides
// carousel starting position is 0
let start = 0;
let end = 3; // it means that display 2 cards at a time

let cardsToDisplayAtATime = 3;
let data = [];

const firstFetch = async () => {
    data = await fetchPostData();

    console.log(data);
    printData();
};
// we use this function to change position/ slide numbers of the carousel
const handleClick = (x, y) => {
    start = x;
    end = y;
    console.log(start, end);
};

// this is used to fetch and print the data
const printData = () => {
    latestPost.innerHTML = printCards(data.slice(start, end));
    mostRead.innerHTML = printCards(data.slice(start, end));
};

// this is gonna print the cards for the first time when the user comes to our app
firstFetch();

// this is used to change the position of the carousel to the next slide
carouselNext.addEventListener("click", () => {
    // if end is equal to length of data, as an example, total cards is 12 and our ending position is 12,
    // which means that all the slides are shown to the user, so we need to stop the carousel from moving
    if (data.length <= end) {
        handleClick(0, 3);
    } else {
        // 2 means that display 2 cards at a time per slide
        handleClick(start + cardsToDisplayAtATime, end + cardsToDisplayAtATime);
        printData();
    }
});

// same logic like next but in reverse order
carouselPrev.addEventListener("click", () => {
    if (start > 0) {
        handleClick(start - cardsToDisplayAtATime, end - cardsToDisplayAtATime);
        printData();
    } else {
        handleClick(0, 3);
    }
});

const handleResize = () => {
    if (window.innerWidth <= 750) {
        console.log("mobile", window.innerWidth);
        prev.style.display = "none";
        next.style.display = "none";
    } else {
        console.log("desktop", window.innerWidth);
        prev.style.display = "flex";
        next.style.display = "flex";
    }
};

window.addEventListener("resize", handleResize);
