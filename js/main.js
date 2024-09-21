
const close_btn = document.querySelector('.zone_cl');
const pop = document.querySelector('.top_pop_up');
const btnElement = document.getElementById('btn_cl');

function initPopup() {
    // 닫기 버튼 클릭 시
    close_btn.addEventListener('click', function changeBtnName() {
        btnElement.innerText = '팝업존 열기'; // 버튼 텍스트 변경
        pop.classList.add('hidden'); // 팝업 숨기기
    });

}
initPopup();


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






