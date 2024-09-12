function changeBtnName(){
    const btnElement=document.getElementById('btn_cl');
    btnElement.innerText='팝업존 열기';
}


const close_btn= document.querySelector('.zone_cl');
const open_btn= document.querySelector('.zone_op');
const pop = document.querySelector('.top_pop_up');

function init(){
    close_btn.addEventListener('click', function() {
        pop.classList.remove('show');
        pop.classList.add('hidden'); 
    });

    open_btn.addEventListener('click', function() {
        pop.classList.remove('hidden');
        pop.classList.add('show');
    });


//     close_btn.addEventListener('click',function(){
// pop.classList.add('hidden');
//     });
//     open_btn.addEventListener('click',function(){
// pop.classList.remove('hidden');
//     });
}




