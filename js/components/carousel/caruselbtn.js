const latestPost = document.getElementById("latest-post");
const mostRead = document.getElementById("most_read");
const carouselNext = document.getElementById("next");
const carouselPrev = document.getElementById("prev");

let start = 0;
let end = 2;
let cardsToDisplayAtATime = 2;

export const handleClick = (x, y) => {
    start = x;
    end = y;
    console.log(start, end);
};

export const printData = () => {
    let data = fetchAnotherData().slice(start, end);
    latestPost.innerHTML = printCards(data);
    mostRead.innerHTML = printCards(fetchPostData());
};

export const handleNextClick = () => {
    if (fetchAnotherData().length <= end) {
        handleClick(start, end);
    } else {
        handleClick(start + cardsToDisplayAtATime, end + cardsToDisplayAtATime);
        printData();
    }
};

export const handlePrevClick = () => {
    if (start > 0) {
        handleClick(start - cardsToDisplayAtATime, end - cardsToDisplayAtATime);
        printData();
    } else {
        handleClick(start, end);
    }
};

export const initializeCarousel = () => {
    printData();
    carouselNext.addEventListener("click", handleNextClick);
    carouselPrev.addEventListener("click", handlePrevClick);
};