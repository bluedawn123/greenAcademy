function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // days를 밀리초로 변환
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// 쿠키를 가져오는 함수
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArr = decodedCookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
        let cookie = cookieArr[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

// 팝업을 보여주는 함수
function showPopup() {
    const dontShow = getCookie("dontShowToday");
    if (!dontShow) {
        document.getElementById("popup").style.display = "block";
    }
}

// "닫기" 버튼 클릭 시 팝업을 닫는 함수
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// "하루 동안 안 보기" 체크박스 클릭 시 쿠키 설정
document.getElementById("dontShowToday").addEventListener("change", function() {
    if (this.checked) {
        setCookie("dontShowToday", "true", 1); // 쿠키를 1일로 설정
    } else {
        document.cookie = "dontShowToday=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // 쿠키 삭제
    }
});

// 페이지 로드 시 팝업을 확인
window.onload = function() {
    showPopup();
};