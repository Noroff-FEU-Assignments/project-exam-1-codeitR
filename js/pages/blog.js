import { fetchOnePost } from "../components/data.js";
import { blogTemplate } from "../components/printCards.js";
const print_blog = document.getElementById("print_blog_post");
let data = {};

const fetchForFirstTime = async () => {
    const query = window.location.search.substring(4);
    // var qs = parse_query_string(query);
    // console.log(query);

    data = await fetchOnePost(query);
    // console.log(data);
    print_blog.innerHTML = blogTemplate(data);
};

fetchForFirstTime();
