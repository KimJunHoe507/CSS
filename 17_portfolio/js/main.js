function time(){
    // DOM객체선택 후 변수저장
    let webHour=document.getElementById("web_h");
    let webMin=document.getElementById("web_m");
    let webSec=document.getElementById("web_s");
    let webMSec=document.getElementById("web_ms");

    // 날짜/시간 객체 생성
    let date=new Date();

    // 시간
    let hour=date.getHours();
    let dH=digit(hour);
    webHour.innerHTML=dH;

    // 분
    let min=date.getMinutes();
    let dM=digit(min);
    webMin.innerHTML=dM;

    // 초
    let sec=date.getSeconds();
    let dS=digit(sec);
    webSec.innerHTML=dS;

    // 밀리초
    let msec=date.getMilliseconds();
    let mmsec=Math.floor(msec/10)
    let dMS=digit(mmsec);
    webMSec.innerHTML=dMS;

    // 시간, 분, 초, 밀리초 자리수 두자리로 조정
    function digit(x){
        if(x<10){
            return "0"+x;
        }else{
            return x;
        }
    }


}
// 매 1초마다 time함수 반복실행
setInterval(function(){
        time();
},1000)

setInterval(function(){
        time();
},1)

function toDay(){
    let webYear=document.getElementById("web_y");
    let webMon=document.getElementById("web_mon");
    let webDay=document.getElementById("web_d");
    let webWeek=document.getElementById("web_w");
    // console.log(webMon)

    let toDays=new Date();

    // 년
    let year=toDays.getFullYear();
    webYear.innerHTML=year;
    // 월
    let mon=toDays.getMonth()+1;
    let dMon=ddigit(mon);
    webMon.innerHTML=dMon;
    // 일
    let day=toDays.getDate();
    let dDay=ddigit(day);
    webDay.innerHTML=dDay;
    // 요일
    let weekNum=toDays.getDay();
    let week=weeks(weekNum);
    webWeek.innerHTML=week;


    function ddigit(x){
        if(x<10){
            return "0"+x;
        }else{
            return x;
        }
    }

    // 요일 숫자에서 글자변환
    function weeks(y) {
        const week = ["일", "월", "화", "수", "목", "금", "토"];
        return week[y];
    }
}



setInterval(function(){
        toDay();
},1000)