export const trimText = (text, length) => {
  return `${text.slice(0, length)}...`;
};

export const printCards = (data) => {
  return data
    .map(
      (item) => `
      <div class="post">
      <img src="${item.image}" alt="" />
      <p class="">Publish : ${new Date(item.date).toLocaleDateString().replace(/\//g, ".")}</p>
      <p class="featuring">Feature Article</p>
      <p class="card_title">${item.title}</p>
       <a href="/blog/index.html?id=${item.id}">
         <button class= "btn read_more">Read More...</button>
       </a>
      <p>${trimText(item.excerpt, 120)}</p>
      
      </div>
      `
    )
    .join("");
};
export const blogTemplate = (data) => {
  return `
  <div class="blog_body">
    <h1>${data.title}</h1>
    <span class="attribute_section">
    <span class="attribute_section_auth">
    <p>Author: ${data.author}</p>
    <p>Date: ${new Date(data.date).toLocaleDateString().replace(/\//g, ".")}</p> 
    </span></span>
    <img class="post_image" src=${data.image} alt="">
    <h3>Introduction</h3>
     <p>${data.excerpt}</p>
    <div class="content">
      ${data.content.rendered}
    </div>
  </div>
  `;
};