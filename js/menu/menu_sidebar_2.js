// menu_sidebar.js

document.querySelector('.menu2-1').addEventListener('mouseover', () => {
    document.querySelector('.menu2-1').classList.add('side-show');
    document.querySelector('.menu2-1-img').classList.add('img-show');
}
);

document.querySelector('.menu2-1').addEventListener('mouseout', () => {
    document.querySelector('.menu2-1').classList.remove('side-show');
    document.querySelector('.menu2-1-img').classList.remove('img-show');
}
);

document.querySelector('.menu2-2').addEventListener('mouseover', () => {
    document.querySelector('.menu2-2').classList.add('side-show');
    document.querySelector('.menu2-2-img').classList.add('img-show');
}
);

document.querySelector('.menu2-2').addEventListener('mouseout', () => {
    document.querySelector('.menu2-2').classList.remove('side-show');
    document.querySelector('.menu2-2-img').classList.remove('img-show');
}
);