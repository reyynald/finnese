pindah = 1;
function jlk(){
    if(pindah == 1){
        Btn.style.top=400;
        Btn.style.left=300;
        pindah=2;
    }
    else if(pindah == 2){
        Btn.style.top=400;
        Btn.style.left=50;
        pindah=3;
    }
    else if(pindah == 3){
        Btn.style.top=450;
        Btn.style.left=300;
        pindah=1;
    }
}