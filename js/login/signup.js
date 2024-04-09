// sign.js

document.querySelector('#input-id').addEventListener('keydown', (eventInfo) => {
    if (eventInfo.keyCode == 13) {
        eventInfo.preventDefault(); //기본 이벤트 작동을 막기
        document.querySelector('#input-password').focus();
    }
});

document.querySelector('#input-password').addEventListener('keydown', (eventInfo) => {
    if (eventInfo.keyCode == 13) {
        eventInfo.preventDefault(); //기본 이벤트 작동을 막기
        document.querySelector('#input-name').focus();
    }
});

document.querySelector('#input-name').addEventListener('keydown', (eventInfo) => {
    if (eventInfo.keyCode == 13) {
        eventInfo.preventDefault(); //기본 이벤트 작동을 막기
        document.querySelector('#input-securitynumber').focus();
    }
});

document.querySelector('#input-securitynumber').addEventListener('keydown', (eventInfo) => {
    if (eventInfo.keyCode == 13) {
        eventInfo.preventDefault(); //기본 이벤트 작동을 막기
        document.querySelector('#input-phonenumber').focus();
    }
});

document.querySelector('#input-phonenumber').addEventListener('keydown', (eventInfo) => {
    if (eventInfo.keyCode == 13) {
        eventInfo.preventDefault(); //기본 이벤트 작동을 막기
        document.querySelector('#input-address').focus();
    }
});

document.querySelector('#input-address').addEventListener('keydown', (eventInfo) => {
    if (eventInfo.keyCode == 13) {
        eventInfo.preventDefault(); //기본 이벤트 작동을 막기
        document.querySelector('#signup-submit').focus();
    }
});