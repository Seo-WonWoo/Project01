// login.js

document.querySelector('#input-id').addEventListener('keydown', (eventInfo) => {
    console.log('dddd');
    if (eventInfo.keyCode == 13) {
        eventInfo.preventDefault(); //기본 이벤트 작동을 막기
        document.querySelector('#input-password').focus();
    }
});

document.querySelector('#input-password').addEventListener('keydown', (eventInfo) => {
    console.log('eeee');
    if (eventInfo.keyCode == 13) {
        eventInfo.preventDefault(); //기본 이벤트 작동을 막기
        document.querySelector('#id-recheck').focus();
    }
});