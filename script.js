let hamburger = document.querySelector('.hamburger')
var sidebar = document.querySelector('.sidebar')
var main = document.querySelector('.main-container')
var card = document.querySelectorAll('.card')
hamburger.onclick = () => {
    // console.log('clicked')
    sidebar.classList.toggle("toggle-sidebar")
    main.classList.toggle('shift-main')
    card.forEach(element => {
        element.classList.toggle('larger-card')
    });
}
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    });
});
