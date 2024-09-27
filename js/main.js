// 로컬 스토리지에서 'visitCount' 값을 가져옴
let visitCount = localStorage.getItem('visitCount');

// 방문 횟수가 없을 경우 초기화
if (visitCount === null) {
    visitCount = 0;
} else {
    visitCount = parseInt(visitCount);
}

// 방문 횟수 증가
visitCount++;

// 증가한 방문 횟수를 다시 로컬 스토리지에 저장
localStorage.setItem('visitCount', visitCount);

// 방문 횟수를 페이지에 표시
document.getElementById('visitCount').textContent = visitCount;
// ========================================================================================================


// let index = 0;
// const bg_image = ['red', 'blue_1', 'blue_2', 'orange', 'yellow_1', 'yellow_2'];
// const safer_slide = document.querySelectorAll('.slide');


// function showNextImage() {
//     safer_slide.forEach(slide => {
//         slide.classList.remove(bg_image[index]);
//     });
//     index = (index + 1) % bg_image.length;
//     safer_slide.forEach(slide => {
//         slide.classList.add(bg_image[index]);
//         slide.classList.add('show');
//     });
// }

// setInterval(showNextImage, 3000);  // 3초마다 전환

// ========================================================================================================

// const slide_li = document.querySelectorAll('.btn_item');

// function shrink_animation() {
//     slide_li.forEach(btn_item => {
//         btn_item.classList.remove('animate'); // 기존 애니메이션 제거
//         void btn_item.offsetWidth; // 트리거를 위해 강제로 재계산
//         btn_item.classList.add('animate'); // 애니메이션 클래스 추가
//     });
// }


// const triggerButtons = document.querySelectorAll('.shrink_ani');

// triggerButtons.forEach(shrink_ani => {
//     shrink_ani.addEventListener('click', shrink_animation);
// });

// function shrink_animation() {
//     triggerButtons.forEach(shrink_ani => {
//         shrink_ani.classList.remove('animate');
//         void shrink_ani.offsetWidth;
//         shrink_ani.classList.add('animate');
//     });
// }

// function shrink_animation(event) {
//     const clickedButton = event.currentTarget;

//     // 클릭된 버튼에만 애니메이션을 리셋하고 다시 시작
//     clickedButton.classList.remove('animate');
//     void clickedButton.offsetWidth; // 리플로우 트리거
//     clickedButton.classList.add('animate');
// }











// ===========================
//상단 히든 팝업 =========

const pop_btn = document.querySelector('.top_zone_btn');
const pop = document.querySelector('.top_pop_up');
const btnElement = document.getElementById('btn_cl');

function top_Popup() {
    pop_btn.addEventListener('click', function () {
        pop.classList.toggle('show');
    });
}
top_Popup();

// ========================
// 메뉴 ===========

const menu_gnb = document.querySelector('.gnb_li');
const menu_lnb = document.querySelectorAll('.lnb li');
const menu_gnb_items = document.querySelectorAll('.gnb_li'); // 모든 gnb_li를 선택

function initMenu() {
    menu_gnb_items.forEach(function (menu_gnb) { // 각 gnb_li에 대해
        menu_gnb.addEventListener('mouseover', function () {
            const menu_lnb = this.querySelector('.lnb');
            if (menu_lnb) {
                menu_lnb.classList.add('show');
            }
        });

        menu_gnb.addEventListener('mouseout', function () {
            const menu_lnb = this.querySelector('.lnb');
            if (menu_lnb) {
                menu_lnb.classList.remove('show');
            }
        });
    });
}
initMenu();

// ==========================
//  햄버거 팝업 ========


const ham_op = document.querySelector('.hamburger');
const ham_cl = document.querySelector('.ham_close a');
const ham_pop = document.querySelector('.hamburger_pop');
const body = document.body;

ham_op.addEventListener('click', () => {
    ham_pop.classList.toggle('show');

    // 팝업이 열리면 no-scroll 클래스를 추가하여 스크롤을 비활성화
    if (ham_pop.classList.contains('show')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});

ham_cl.addEventListener('click', () => {
    ham_pop.classList.toggle('show');

    // 팝업이 닫히면 no-scroll 클래스를 제거하여 스크롤을 활성화
    if (ham_pop.classList.contains('show')) {
        body.classList.remove('no-scroll');
    } else {
        body.classList.add('no-scroll');
    }
});


// ================================
// 사이드 스크롤 아이콘 ===========

document.addEventListener('DOMContentLoaded', function () {
    const quick_icon = document.querySelector('.scroll_icon');
    const threshold = window.innerHeight / 2; // 기준점이 되는 요소

    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', function () {
        const pageScroll = window.scrollY;
        quick_icon.style.opacity = pageScroll > threshold ? '1' : '0';
    });

    // 페이지 로드 시 초기 상태 설정
    const pageScroll = window.scrollY;
    quick_icon.style.opacity = pageScroll > threshold ? '1' : '0';
});

// threshold: 문지방, 한계점 = 요소가 보이기 시작할 스크롤 위치가 윈도우Y 보다 크면 보이게
// if (pageScroll > threshold) {
//     quick_icon.style.opacity = '1';
// } else {
//     quick_icon.style.opacity = '0';
// }

//반대
// if (window.scrollY > threshold) {
//     quick_icon.style.opacity = '1';
// } else {
//     quick_icon.style.opacity = '0';
// }

// ===============


