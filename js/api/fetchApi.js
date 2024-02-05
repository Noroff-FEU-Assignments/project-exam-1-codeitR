const baseURL = "https://wordpress.ramesh.no/wp-json/wp/v2/";
const endpoints = "posts";
const fetchedURL = baseURL + endpoints;

const card_display = document.getElementById("card-displsy");

const errorDisplay = (error) => {
    console.error("Error while fetching data:", error)
};
const trimText = (text, maxLength) => {
    // can shoot my logic to show number of words.
}

const displayCards = async () => {
    try {
        const respose = await fetch(fetchedURL);
        const data = await respose.json()

        card_display.innerHTML = data
            // .map((item) => `
            //     <div class="post">
            //         <img src="${item.featured_media.source_url}" alt="" />
            //         <p class="">${item.date}</p>
            //         <p class="">${item.title.rendered}</p>
            //         <p class="featuring">Featuring</p>
            //         <p>${item.author}</p>
            //         <button class="btn">Read More...</button>
            //         <p>${trimText(item.content.rendered, 40)}</p>
            //     </div>
            // `)
            .join("");
    } catch (error) {
        errorDisplay(error);
    }
};
export { displayCards };