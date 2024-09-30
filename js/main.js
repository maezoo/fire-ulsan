// ===========================
// //햄버거 팝업 효과 =========

const spans = document.querySelectorAll('.category_box .sub_category > li span');
const nestedListItems = document.querySelectorAll('.category_box .sub_category li:nth-child(-n+3) ul li');

spans.forEach(span => {
    span.addEventListener('mouseenter', (event) => {
        const parentLi = event.target.closest('li');
        parentLi.style.backgroundImage = 'url(../images/ham_yellow_bull.png)';
    });

    span.addEventListener('mouseleave', (event) => {
        const parentLi = event.target.closest('li');
        parentLi.style.backgroundImage = '';
    });
});

nestedListItems.forEach(nestedItem => {
    nestedItem.addEventListener('mouseenter', (event) => {
        const parentLi = event.target.closest('li');
        parentLi.style.backgroundImage = 'url(../images/ham_yellow_bull.png)';
    });

    nestedItem.addEventListener('mouseleave', (event) => {
        const parentLi = event.target.closest('li');
        parentLi.style.backgroundImage = '';
    });
});
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
const ham_inner = document.querySelector('.hamburger_inner');


ham_op.addEventListener('click', () => {
    ham_pop.classList.toggle('show');
    body.classList.toggle('no-scroll');

    // 팝업이 열릴 때 애니메이션 클래스 추가
    if (ham_pop.classList.contains('show')) {
        ham_inner.classList.add('zoom-in-effect');
    }
});

// 햄버거 메뉴 닫기
ham_cl.addEventListener('click', () => {
    ham_pop.classList.toggle('show');
    body.classList.toggle('no-scroll');

    // 팝업이 닫힐 때 애니메이션 클래스 제거
    ham_inner.classList.remove('zoom-in-effect');
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
        if (pageScroll > threshold) {
            quick_icon.classList.add('show');
        } else {
            quick_icon.classList.remove('show');
        }
    });

    const pageScroll = window.scrollY;
    if (pageScroll > threshold) {
        quick_icon.classList.add('show');
    } else {
        quick_icon.classList.remove('show');
    }
});