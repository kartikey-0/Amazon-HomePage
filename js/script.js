const backToTop = document.querySelector('.foot-panel');

if (backToTop) {
    backToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // smooth scrolling
        });
    });
}
