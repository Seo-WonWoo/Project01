// 날짜 정보 가져오기    
var today = new Date(); // 현재시간 date 객체 만들기(오늘)

var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());
// 달력에서 표기하는 날짜 객체


var currentYear = thisMonth.getFullYear(); // 달력에서 표기하는 연
var currentMonth = thisMonth.getMonth(); // 달력에서 표기하는 월
var currentDate = thisMonth.getDate(); // 달력에서 표기하는 일    

// 캘린더 렌더링
renderCalender(thisMonth);

function renderCalender(thisMonth) {

    // 렌더링을 위한 데이터 정리
    currentYear = thisMonth.getFullYear();
    currentMonth = thisMonth.getMonth();
    currentDate = thisMonth.getDate();

    // 이전 달의 마지막 날 날짜와 요일 구하기
    var startDay = new Date(currentYear, currentMonth, 0);
    var prevDate = startDay.getDate();
    var prevDay = startDay.getDay();

    // 이번 달의 마지막날 날짜와 요일 구하기
    var endDay = new Date(currentYear, currentMonth + 1, 0);
    var nextDate = endDay.getDate();
    var nextDay = endDay.getDay();

    // 현재 월 표기
    document.querySelector('.year-month').innerText = currentYear + '년 ' + (currentMonth + 1) + '월';

    calendar = document.querySelector('.dates')
    calendar.innerHTML = null;    

    // 지난달
    if(prevDay !== 6){
        for (var i = prevDate - prevDay; i <= prevDate; i++) {
            calendar.innerHTML += '<div class="day prev disable">' + i + '</div>'
        }
    }
    
    // 이번달
    for (var i = 1; i <= nextDate; i++) {
        id_day = get_number_str(currentYear) + '-' + get_number_str(currentMonth + 1) + '-' + get_number_str(i);
        calendar.innerHTML += '<div id="' + id_day + '" class="day current" onclick="select_day(this)">' + i + '</div>'
    }
    // 다음달
    for (var i = 1; i <= (7 - nextDay == 1 ? 0 : 6 - nextDay); i++) {
        calendar.innerHTML += '<div class="day next disable">' + i + '</div>'
    }

    // 오늘 날짜 표기
    if (today.getMonth() == currentMonth) {
        todayDate = today.getDate();
        var currentMonthDate = document.querySelectorAll('.dates .current');
        currentMonthDate[todayDate - 1].classList.add('today');
    }
}

// 이전달로 이동
document.querySelector('.go-prev').addEventListener('click', function () {
    thisMonth = new Date(currentYear, currentMonth - 1, 1);
    renderCalender(thisMonth);
});

// 다음달로 이동
document.querySelector('.go-next').addEventListener('click', function () {
    thisMonth = new Date(currentYear, currentMonth + 1, 1);
    renderCalender(thisMonth);
});

// 변수
function get_number_str(num) {
    if (num < 10) num = '0' + num;
    return num;
}

// 캘린더 날짜 클릭시 예약날짜 자동입력
function select_day(event) {    
    document.querySelector('#reserved_day').value = document.getElementById(event.getAttribute('id')).getAttribute('id');
}

// 예약시간대
let place_a_time = [`조조시간(6:00 ~ 9:00)`, `주간시간(9:00 ~ 12:00)`, `주간시간(13:00 ~ 16:00)`, `야간시간(18:00 ~ 21:00)`];
let place_b_time = [`조조시간(6:00 ~ 9:00)`, `주간시간(9:00 ~ 12:00)`, `주간시간(13:00 ~ 16:00)`, `야간시간(18:00 ~ 22:00)`];
let place_c_time = [`조조시간(5:00 ~ 7:00)`, `조조시간(7:00 ~ 9:00)`, `주간시간(9:00 ~ 11:00)`, `주간시간(11:00 ~ 13:00)`, `주간시간(13:00 ~ 15:00)`, `야간시간(18:00 ~ 20:00)`, `야간시간(20:00 ~ 22:00)`];
let place_d_time = [`조조시간(5:00 ~ 7:00)`, `조조시간(7:00 ~ 9:00)`, `주간시간(9:00 ~ 11:00)`, `주간시간(11:00 ~ 13:00)`, `주간시간(13:00 ~ 15:00)`, `야간시간(18:00 ~ 20:00)`, `야간시간(20:00 ~ 22:00)`];

// 예약장소 선택
document.querySelector('#reserved_place').addEventListener('click', function(){
    if(this.value == 'a'){ // 축구장(천연잔디)
        let str = `<option value="" selected>예약시간 선택</option>`; 
        // 예약장소별 예약시간대 셀렉터 옵션내용 추가
        place_a_time.forEach(function(time, index){
            str += `<option value="` + index + `">` + time + `</option>`;            
        });
        document.querySelector('#reserved_time').innerHTML = str;

        // 예약장소별 정보 기입
        document.querySelector('.place-information').innerHTML = 
        `<h5>대관안내(상반기)</h5>
        <ul>
            <li>접수기간 : 2024년 03월 13일(09:00) ~ 2024년 06월 30일(15:00)<br>
            <li>대관기간 : 2024-04-01 ~ 2024-06-30 모든요일</li>
            <li>대관시간 : 06:00 ~ 21:00</li>                                    
            </ul>            
        <h5>&nbsp;※ 잔디상태 및 보호로 인한 사용횟수 제한 : 주 2~3회, 일 1회(3~4시간)</h5>`;

        // 예약장소별 준수사항 기입
        document.querySelector('.content-compliance').innerHTML = 
        `<h3>이용자 준수사항</h3>
        <ul>
            <li>공원 내 취사행위금지 및 음식물 반입금지(물,음료수 제외)</li>
            <li>공원 내 전구역 금연(인화물질 반입금지)</li>
            <li>축구장 내에서는 축구화를 착용한 팀의 훈련 및 경기만 허용<br>(일반 기업행사 및 기타 체육행위 불가)</li>
            <li>축구장 사용 전 예약자 확인 및 사용규정동의서 서명후 이용</li>
        </ul>
        <h4>※ 공원을 이용하는 분들이 쾌적한 환경에서 즐거운 시간을 가질 수 있도록 협조하여 주시기 바랍니다.</h4>`;
    }
    if(this.value == 'b'){ // 축구장(인조잔디)
        let str = `<option value="" selected>예약시간 선택</option>`;         
        place_b_time.forEach(function(time, index){
            str += `<option value="` + index + `">` + time + `</option>`;            
        });
        document.querySelector('#reserved_time').innerHTML = str;
        document.querySelector('.place-information').innerHTML =        
        `<h5>대관안내</h5>
        <ul>
            <li>접수기간 : 2016년 01월 01일(06:00) ~ 2030년 11월 30일(22:00)<br>
                매월 1일 18:00부터 다음달 전체 선착순 접수<br>
                &nbsp;※ 예) 1월 1일 18:00 -> 2월 대관 신청 가능</li>
            <li>대관기간 : 2016-01-01 ~ 2030-11-30 모든요일</li>
            <li>대관시간 : 06:00 ~ 22:00<br>
                대관가능시간(기본2시간, 추가3시간 가능)    
            </li>                                    
        </ul>
        <h5>&nbsp;※ 동절기(12월~2월) 잔디보호 및 이용자 안전을 위해 조조 및 야간 대관불가</h5>`;

        document.querySelector('.content-compliance').innerHTML = 
        `<h3>이용자 준수사항</h3>
        <ul>
            <li>공원 내 취사행위금지 및 음식물 반입금지(물,음료수 제외)</li>
            <li>공원 내 전구역 금연(인화물질 반입금지)</li>
            <li>축구장 내에서는 축구화를 착용한 팀의 훈련 및 경기만 허용<br>(일반 기업행사 및 기타 체육행위 불가)</li>
            <li>축구장 사용 전 예약자 확인 및 사용규정동의서 서명후 이용</li>
            <li>사용후 반드시 뒷정리(자기 쓰레기 되 가져가기)</li>
        </ul>
        <h4>※ 공원을 이용하는 분들이 쾌적한 환경에서 즐거운 시간을 가질 수 있도록 협조하여 주시기 바랍니다.</h4>`;
    }
    if(this.value == 'c'){ // 다목적 구장
        let str = `<option value="" selected>예약시간 선택</option>`; 
        place_c_time.forEach(function(time, index){
            str += `<option value="` + index + `">` + time + `</option>`;            
        });
        document.querySelector('#reserved_time').innerHTML = str;
        document.querySelector('.place-information').innerHTML = 
        document.querySelector('.content-compliance').innerHTML = 
        `<h5>대관안내(상반기)</h5>
        <ul>
            <li>접수기간 : 2016년 01월 01일(06:00) ~ 2031년 1월 1일(00:00)</li>
            <li>대관기간 : 2016-01-01 ~ 2031-01-01 모든요일</li>
            <li>대관시간 : 06:00 ~ 22:00<br>
            </li>                                    
        </ul>        
        <h5>&nbsp;※ 조명제공 : 관리실 신청서 작성시 제공</h5>`;

        document.querySelector('.content-compliance').innerHTML = 
        `<h3>이용자 준수사항</h3>
        <ul>
            <li>공원 내 취사행위금지 및 음식물 반입금지(물,음료수 제외)</li>
            <li>공원 내 전구역 금연(인화물질 반입금지)</li>
            <li>다목적구장/ 농구장 내에서는 운동화착용</li>
        </ul>
        <h4>※ 위 사항을 위반시 퇴장 조치 및 이후 사용을 제한 할 수 있습니다</h4>`;
    }
    if(this.value == 'd'){ // 농구장
        let str = `<option value="" selected>예약시간 선택</option>`; 
        place_c_time.forEach(function(time, index){
            str += `<option value="` + index + `">` + time + `</option>`;            
        });
        document.querySelector('#reserved_time').innerHTML = str;
        document.querySelector('.place-information').innerHTML = 
        document.querySelector('.content-compliance').innerHTML = 
        `<h5>대관안내(상반기)</h5>
        <ul>
            <li>접수기간 : 2016년 01월 01일(06:00) ~ 2031년 1월 1일(00:00)</li>
            <li>대관기간 : 2016-01-01 ~ 2031-01-01 모든요일</li>
            <li>대관시간 : 06:00 ~ 22:00<br>
            </li>                                    
        </ul>        
        <h5>&nbsp;※ 조명제공 : 관리실 신청서 작성시 제공</h5>`;

        document.querySelector('.content-compliance').innerHTML = 
        `<h3>이용자 준수사항</h3>
        <ul>
            <li>공원 내 취사행위금지 및 음식물 반입금지(물,음료수 제외)</li>
            <li>공원 내 전구역 금연(인화물질 반입금지)</li>
            <li>다목적구장/ 농구장 내에서는 운동화착용</li>
        </ul>
        <h4>※ 위 사항을 위반시 퇴장 조치 및 이후 사용을 제한 할 수 있습니다</h4>`;
    }
});

// 예상비용 산출
document.querySelector('#reserved_time').addEventListener('click', function(){
    // 예약날짜 변수 선언
    let reservedDate = document.querySelector('#reserved_day').value;
    
    // 예약날짜 요일 추출
    var reservedDay_s = new Date(reservedDate.slice(0,4),(parseInt(reservedDate.slice(5,7),10)-1),reservedDate.slice(8,10));
    var reservedDay_g = reservedDay_s.getDay();

    let reservedPlace = document.querySelector('#reserved_place').value;
    let reservedTime = document.querySelector('#reserved_time').value;

    let fee, tex, cost;
    let submitCheck = false;

    if(reservedPlace === 'a'){ // 축구장(천연잔디)
        if(reservedDay_g === '0' || reservedDay_g === '6'){ // 일요일/토요일
            if(reservedTime === '3'){ // 야간시간
                fee = 675000;
                submitCheck = true;             
            } else if(reservedTime === '0' || reservedTime === '1' || reservedTime === '2'){ // 조조/주간시간
                fee = 360000;
                submitCheck = true;
            }            
        } else{ // 평일
            if(reservedTime === '3'){ // 야간시간
                fee = 450000;
                submitCheck = true;
            } else if(reservedTime === '0' || reservedTime === '1' || reservedTime === '2'){ // 조조/주간시간
                fee = 300000;
                submitCheck = true;
            }            
        }
        tex = fee * 0.1;
        cost = fee + tex;
    }
    if(reservedPlace === 'b'){ // 축구장(인조잔디)
        if(reservedDay_g === '0' || reservedDay_g === '6'){ // 일요일/토요일
            if(reservedTime === '0'){ // 조조시간  
                fee = 112500;
                submitCheck = true;
            } else if(reservedTime === '3'){ // 야간시간
                fee = 337500;
                submitCheck = true;
            } else if(reservedTime === '1' || reservedTime === '2'){ // 주간시간
                fee = 225000;
                submitCheck = true;
            }            
        } else { // 평일
            if(reservedTime === '0'){ // 조조시간  
                fee = 75000;
                submitCheck = true;
            } else if(reservedTime === '3'){ // 야간시간
                fee = 225000;
                submitCheck = true;
            } else if(reservedTime === '1' || reservedTime === '2'){ // 주간시간
                fee = 150000;
                submitCheck = true;
            }            
        }
        tex = fee * 0.1;
        cost = fee + tex;
    }
    if(reservedPlace === 'c' || reservedPlace === 'd'){
        fee, tex, cost = null;
        submitCheck = true;        
    }    

    if(submitCheck == true && fee != null){
        document.querySelector('.place-cost').innerHTML =
        `<h4>` + cost.toLocaleString('ko-KR') + `원(VAT포함, 할인제외)</h4>`
        + `<h5> 기본요금 : ` + fee.toLocaleString('ko-KR') + `원</h5>`
        + `<h5> 세금(VAT) : ` + tex.toLocaleString('ko-KR') + `원</h5>`;
    } else if(submitCheck == true && fee == null){
        document.querySelector('.place-cost').innerHTML =
        `<h4>무 료</h4>`;
    } 

});