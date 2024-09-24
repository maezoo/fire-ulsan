const pop_btn = document.querySelector('.top_zone_btn');
const pop = document.querySelector('.top_pop_up');
const btnElement = document.getElementById('btn_cl');

function top_Popup() {
    pop_btn.addEventListener('click', function () {
        pop.classList.toggle('show');
    });
}

top_Popup();

// ========================================================================================================
const ham_op = document.querySelector('.hamburger');
const ham_cl = document.querySelector('.ham_close a');
const ham_pop = document.querySelector('.hamburger_pop');
const body = document.body;

// 팝업 열기 이벤트
ham_op.addEventListener('click', () => {
    ham_pop.classList.toggle('show');

    // 팝업이 열리면 no-scroll 클래스를 추가하여 스크롤을 비활성화
    if (ham_pop.classList.contains('show')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});

// 팝업 닫기 이벤트
ham_cl.addEventListener('click', () => {
    ham_pop.classList.toggle('show');

    // 팝업이 닫히면 no-scroll 클래스를 제거하여 스크롤을 활성화
    if (!ham_pop.classList.contains('show')) {
        body.classList.remove('no-scroll');
    } else {
        body.classList.add('no-scroll');
    }
});

// ========================================================================================================


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

// ========================================================================================================
