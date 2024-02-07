import { fetchPostData } from "../components/data.js";
import { printCards } from "../components/printCards.js";
const card_display = document.getElementById("card_display");
const load_more_btn = document.getElementById("load_more_btn");
const go_up = document.getElementById("go_up")

let start = 0;
let end = 6;
let data = [];

let getData = async () => {
    await fetchPostData().then((res) => (data = res));
    console.log(data)
    card_display.innerHTML = printCards(data.slice(start, end))
}
getData();


load_more_btn.addEventListener("click", () => {
    start = end;
    end += 3;
    const dataSlice = data.slice(start, end);
    card_display.innerHTML += printCards(dataSlice);
    if (end >= data.length) {
        go_up.style.display = "block";
        load_more_btn.style.display = "none";
    } else {
        load_more_btn.style.display = "block";
        go_up.style.display = "none";
    }
});

go_up.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
