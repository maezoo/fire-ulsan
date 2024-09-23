const ham_op = document.querySelector('.hamburger');
const ham_cl = document.querySelector('.ham_close a');
const ham_pop = document.querySelector('.hamburger_pop');

ham_op.addEventListener('click', () => ham_pop.classList.add('show'));
ham_cl.addEventListener('click', () => ham_pop.classList.add('hidden'));


// function ham_Popup() {
// ham_op.addEventListener('click',
//     function () {
//         ham_pop.classList.add('show');
//     });
// ham_cl.addEventListener('click', function () {
//     ham_pop.classList.add('hidden');
// });
// }
// ham_Popup();


// ========================================================================================================

// const close_btn = document.querySelector('.zone_cl');
// const pop = document.querySelector('.top_pop_up');
// const btnElement = document.getElementById('btn_cl');

// function initPopup() {
//     닫기 버튼 클릭 시
//     close_btn.addEventListener('click', function changeBtnName() {
//         btnElement.innerText = '팝업존 닫기'; // 버튼 텍스트 변경
//         pop.classList.add('hidden'); // 팝업 숨기기
//         pop.classList.add('show'); // 팝업 숨기기
//     });

// }
// initPopup();

const close_btn = document.querySelector('.zone_cl');
const pop = document.querySelector('.top_pop_up');
const btnElement = document.getElementById('btn_cl');

function top_Popup() {
    close_btn.addEventListener('click', function () {
        pop.classList.add('show');
    });
}
top_Popup();



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
