export function setupMenuToggle() {
    let openBtn = document.querySelector(".bi-list")
    let closeBtn = document.querySelector(".bi-x")
    let menu = document.querySelector(".options")

    function toggleMenu() {
        openBtn.classList.toggle("hide")
        closeBtn.classList.toggle("hide")
        menu.classList.toggle("hidden")
    }
    openBtn.addEventListener("click", toggleMenu)
    closeBtn.addEventListener("click", toggleMenu)
}