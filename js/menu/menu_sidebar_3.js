// menu_sidebar.js

document.querySelector('.menu3-1').addEventListener('mouseover', () => {
    document.querySelector('.menu3-1').classList.add('side-show');
    document.querySelector('.menu3-1-img').classList.add('img-show');
}
);

document.querySelector('.menu3-1').addEventListener('mouseout', () => {
    document.querySelector('.menu3-1').classList.remove('side-show');
    document.querySelector('.menu3-1-img').classList.remove('img-show');
}
);