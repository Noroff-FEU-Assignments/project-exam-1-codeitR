export const trimText = (text, length) => {
    return `${text.slice(0, length)}.......Read more!`;
};

export const printCards = (data) => {
    return data
        .map(
            (item) => `
        <div class="post">
        <img src="${item.image}" alt="" />
        <p class="">${item.date}</p>
        <p class="">${item.title}</p>
        <p class="featuring">Featuring</p>
        <p>${item.author}</p>
        <button class= "btn">Read More...</button>
        <p>${trimText(item.post, 100)}</p>
        </div>
        `
        )
        .join("");
};
