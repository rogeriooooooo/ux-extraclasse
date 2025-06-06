let botao = document.getElementById("botao");
let click = 0;

botao.addEventListener("click", function(){
    click++;

    if(click % 2 != 0){
        document.querySelector("body").setAttribute("bgcolor", "green");

    }else{
        document.querySelector("body").setAttribute("bgcolor", "white");
    }
});
