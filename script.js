// script.js
window.onload = function () {
  const isLoggedIn = sessionStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    alert("กรุณาเข้าสู่ระบบก่อนนะ 💕");
    window.location.href = "index.html";
  }
};

function goTo(page) {
  window.location.href = page;
}

function checkQuiz() {
  const selected = document.querySelector('input[name="q1"]:checked');
  const result = document.getElementById("quizResult");
  if (!selected) {
    result.innerText = "เลือกคำตอบก่อนนะจ๊ะ ❤️";
    return;
  }
  if (selected.value === "2") {
    result.innerText = "เก่งมากเลย! รู้ด้วย 😍";
    setTimeout(() => goTo("page4.html"), 1500);
  } else {
    result.innerText = "อุ้ย... ลองใหม่อีกทีน้าา 💔";
  }
}
