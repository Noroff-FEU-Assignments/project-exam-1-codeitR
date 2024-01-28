const latestPost = document.getElementById("latest-post");

const data = [
    {
        image: "../../assets/Rectangle 6.png",
        date: "Tuesday, 11pm, EST 2024.01.24,",
        title: "This is going to the box heading we will have same size like top.",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nam ratione sed fuga, tenetur minus, cumque praesentium dolorem numquam illo aliquam nostrum quod facilis vero voluptatem ex optio explicabo molestias! Unde id nemo consequatur culpa minus deleniti adipisci alias necessitatibus veniam asperiores repellendus ipsum ex ea, qui architecto provident ipsam totam quasi. Accusamus ullam voluptatibus aliquam voluptatum hic animi, quibusdam vero, deserunt, impedit quos facilis deleniti vel cumque ipsum maiores. Natus laudantium in laboriosam consequatur magni non possimus id impedit, aspernatur totam saepe perferendis provident incidunt nihil optio ratione porro dolor, praesentium numquam alias perspiciatis at. Incidunt aliquid cupiditate repellat deserunt expedita odio cumque, tempora impedit minus, consequatur laboriosam necessitatibus ullam reprehenderit sed minima dicta ipsam ex atque eveniet excepturi aperiam possimus. Debitis delectus nobis fugit cum repellat dolores nisi soluta, magnam, deleniti harum ratione suscipit deserunt porro. Minima natus commodi voluptatibus at ducimus debitis expedita velit sint aliquam vitae explicabo voluptate reprehenderit adipisci porro, eum repellat voluptatem autem. Est aperiam excepturi eos, dolorem, hic reiciendis sunt voluptatibus veniam repellendus blanditiis expedita, earum ullam dolor quisquam consectetur facere optio praesentium. Est cumque tenetur quae doloribus libero laudantium quod illum a ut. Minus tempore, incidunt quae ipsam temporibus debitis vero necessitatibus placeat doloremque, ea cum delectus nam distinctio officiis numquam architecto sed consectetur quibusdam. Ad quia minima itaque sit perspiciatis saepe earum accusantium veniam a sunt, deleniti odio incidunt fugit. Officia atque facilis odio exercitationem amet harum reiciendis a id quos quibusdam! Ut at neque, quasi est reprehenderit blanditiis doloremque eum esse quibusdam incidunt rem eligendi facere, quis placeat amet voluptatibus consequatur similique commodi sunt eveniet. Doloribus delectus id beatae officiis numquam ipsam dicta, eveniet ducimus? Quia excepturi quis rem quasi iusto. Iste repellendus officiis eum fugiat neque ipsum, dignissimos saepe placeat doloribus necessitatibus fugit sunt, eaque debitis quisquam unde!",
        author: "Ramesh",
    },
    {
        image: "../../assets/Rectangle 6.png",
        date: "Tuesday, 11pm, EST 2024.01.24,",
        title: "This is going to the box heading we will have same size like top.",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nam ratione sed fuga, tenetur minus, cumque praesentium dolorem numquam illo aliquam nostrum quod facilis vero voluptatem ex optio explicabo molestias! Unde id nemo consequatur culpa minus deleniti adipisci alias necessitatibus veniam asperiores repellendus ipsum ex ea, qui architecto provident ipsam totam quasi. Accusamus ullam voluptatibus aliquam voluptatum hic animi, quibusdam vero, deserunt, impedit quos facilis deleniti vel cumque ipsum maiores. Natus laudantium in laboriosam consequatur magni non possimus id impedit, aspernatur totam saepe perferendis provident incidunt nihil optio ratione porro dolor, praesentium numquam alias perspiciatis at. Incidunt aliquid cupiditate repellat deserunt expedita odio cumque, tempora impedit minus, consequatur laboriosam necessitatibus ullam reprehenderit sed minima dicta ipsam ex atque eveniet excepturi aperiam possimus. Debitis delectus nobis fugit cum repellat dolores nisi soluta, magnam, deleniti harum ratione suscipit deserunt porro. Minima natus commodi voluptatibus at ducimus debitis expedita velit sint aliquam vitae explicabo voluptate reprehenderit adipisci porro, eum repellat voluptatem autem. Est aperiam excepturi eos, dolorem, hic reiciendis sunt voluptatibus veniam repellendus blanditiis expedita, earum ullam dolor quisquam consectetur facere optio praesentium. Est cumque tenetur quae doloribus libero laudantium quod illum a ut. Minus tempore, incidunt quae ipsam temporibus debitis vero necessitatibus placeat doloremque, ea cum delectus nam distinctio officiis numquam architecto sed consectetur quibusdam. Ad quia minima itaque sit perspiciatis saepe earum accusantium veniam a sunt, deleniti odio incidunt fugit. Officia atque facilis odio exercitationem amet harum reiciendis a id quos quibusdam! Ut at neque, quasi est reprehenderit blanditiis doloremque eum esse quibusdam incidunt rem eligendi facere, quis placeat amet voluptatibus consequatur similique commodi sunt eveniet. Doloribus delectus id beatae officiis numquam ipsam dicta, eveniet ducimus? Quia excepturi quis rem quasi iusto. Iste repellendus officiis eum fugiat neque ipsum, dignissimos saepe placeat doloribus necessitatibus fugit sunt, eaque debitis quisquam unde!",
        author: "Joy",
    },
    {
        image: "../../assets/Rectangle 6.png",
        date: "Tuesday, 11pm, EST 2024.01.24,",
        title: "This is going to the box heading we will have same size like top.",
        post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui nam ratione sed fuga, tenetur minus, cumque praesentium dolorem numquam illo aliquam nostrum quod facilis vero voluptatem ex optio explicabo molestias! Unde id nemo consequatur culpa minus deleniti adipisci alias necessitatibus veniam asperiores repellendus ipsum ex ea, qui architecto provident ipsam totam quasi. Accusamus ullam voluptatibus aliquam voluptatum hic animi, quibusdam vero, deserunt, impedit quos facilis deleniti vel cumque ipsum maiores. Natus laudantium in laboriosam consequatur magni non possimus id impedit, aspernatur totam saepe perferendis provident incidunt nihil optio ratione porro dolor, praesentium numquam alias perspiciatis at. Incidunt aliquid cupiditate repellat deserunt expedita odio cumque, tempora impedit minus, consequatur laboriosam necessitatibus ullam reprehenderit sed minima dicta ipsam ex atque eveniet excepturi aperiam possimus. Debitis delectus nobis fugit cum repellat dolores nisi soluta, magnam, deleniti harum ratione suscipit deserunt porro. Minima natus commodi voluptatibus at ducimus debitis expedita velit sint aliquam vitae explicabo voluptate reprehenderit adipisci porro, eum repellat voluptatem autem. Est aperiam excepturi eos, dolorem, hic reiciendis sunt voluptatibus veniam repellendus blanditiis expedita, earum ullam dolor quisquam consectetur facere optio praesentium. Est cumque tenetur quae doloribus libero laudantium quod illum a ut. Minus tempore, incidunt quae ipsam temporibus debitis vero necessitatibus placeat doloremque, ea cum delectus nam distinctio officiis numquam architecto sed consectetur quibusdam. Ad quia minima itaque sit perspiciatis saepe earum accusantium veniam a sunt, deleniti odio incidunt fugit. Officia atque facilis odio exercitationem amet harum reiciendis a id quos quibusdam! Ut at neque, quasi est reprehenderit blanditiis doloremque eum esse quibusdam incidunt rem eligendi facere, quis placeat amet voluptatibus consequatur similique commodi sunt eveniet. Doloribus delectus id beatae officiis numquam ipsam dicta, eveniet ducimus? Quia excepturi quis rem quasi iusto. Iste repellendus officiis eum fugiat neque ipsum, dignissimos saepe placeat doloribus necessitatibus fugit sunt, eaque debitis quisquam unde!",
        author: "Leo",
    },
];

const trimText = (text, length) => {
    return `${text.slice(0, length)}.......Read more!`;
};

latestPost.innerHTML = data
    .map(
        (item) => `<div class="post">
                    <img src="${item.image}" alt="" />
                    <p class="">${item.date}</p>
                    <p class="">${item.title}</p>
                    <p class="featuring">Featuring</p>
                    <p>${item.author}</p>
                    <button>Read More...</button>
                    <p>${trimText(item.post, 100)}</p>
                   </div>`
    )
    .join("");
