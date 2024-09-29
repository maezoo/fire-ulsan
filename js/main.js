// ===========================
//상단 히든 팝업 =========
const pop_btn = document.querySelector('.top_zone_btn');
const pop = document.querySelector('.top_pop_up');
const btnSpan = pop_btn.querySelector('span');
const zoneDown = document.querySelector('.down_zone');
const popupHeight = 226;

function top_Popup() {
    pop_btn.addEventListener('click', function () {
        pop.classList.toggle('show');

        if (pop.classList.contains('show')) {
            btnSpan.textContent = '팝업존 닫기'; moveDown();
        } else {
            btnSpan.textContent = '팝업존 열기'; moveUp();
        }
    });
}
function moveDown() {
    zoneDown.style.marginTop = `${popupHeight}px`;
}

function moveUp() {
    zoneDown.style.marginTop = '';
}

top_Popup();
// ========================
// 메뉴 ===========

const menu_gnb = document.querySelector('.gnb_li');
const menu_lnb = document.querySelectorAll('.lnb li');
const menu_gnb_items = document.querySelectorAll('.gnb_li');

function initMenu() {
    menu_gnb_items.forEach(function (menu_gnb) {
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
    body.classList.toggle('no-scroll');
});

ham_cl.addEventListener('click', () => {
    ham_pop.classList.toggle('show');
    body.classList.toggle('no-scroll');
});

// ================================
// 방문자 수 카운트 ===========

let visitCount = localStorage.getItem('visitCount');

if (visitCount === null) {
    visitCount = 0;
} else {
    visitCount = parseInt(visitCount);
}

visitCount++;

localStorage.setItem('visitCount', visitCount);

document.getElementById('visitCount').textContent = visitCount;

// ================================
// 사이드 스크롤 아이콘 ===========

document.addEventListener('DOMContentLoaded', function () {
    const quick_icon = document.querySelector('.scroll_icon');
    const threshold = window.innerHeight / 2;

    window.addEventListener('scroll', function () {
        const pageScroll = window.scrollY;
        quick_icon.style.opacity = pageScroll > threshold ? '1' : '0';
    });

    const pageScroll = window.scrollY;
    quick_icon.style.opacity = pageScroll > threshold ? '1' : '0';
});

