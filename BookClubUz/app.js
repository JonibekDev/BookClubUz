let loader = document.getElementById('preloader');
window.addEventListener("load", () => {
    loader.style.display = 'none';
    let icon = document.querySelectorAll('#theme');
    icon[0].addEventListener('click', () => {
        document.body.classList.toggle("dark_theme");
    })
    icon[1].addEventListener('click', () => {
        document.body.classList.toggle("dark_theme");
    })
})