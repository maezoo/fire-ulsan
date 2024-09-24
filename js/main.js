const ham_op = document.querySelector('.hamburger');
const ham_cl = document.querySelector('.ham_close a');
const ham_pop = document.querySelector('.hamburger_pop');

ham_op.addEventListener('click', () => ham_pop.classList.toggle('show'));
ham_cl.addEventListener('click', () => ham_pop.classList.toggle('show'));

// ========================================================================================================

const pop_btn = document.querySelector('.top_zone_btn');  // 버튼
const pop = document.querySelector('.top_pop_up');     // 팝업 요소
const btnElement = document.getElementById('btn_cl');  // 열기 버튼

function top_Popup() {
    // 팝업 열기 버튼 클릭 시 팝업을 열거나 닫음
    pop_btn.addEventListener('click', function () {
        pop.classList.toggle('show');
    });
}

top_Popup();

// // 팝업 닫기 버튼 클릭 시 팝업을 닫음
// open_btn.addEventListener('click', function () {
//     pop.classList.remove('show');
// });


//     document.getElementById('pop_up_top').style.display = "none";
// }
// 페이지 로드 시 팝업을 보이게 설정 (필요한 경우)
// window.onload = function () {
//     document.getElementById('pop_up_top').style.display = "block";
// };

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
