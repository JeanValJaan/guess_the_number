button = btn.addEventListener('click', isEqual);
let rndm = parseInt(100*Math.random());
let er = document.getElementById("err");
let timer;
function isEqual () {
    let num = document.getElementById("num").value;
    console.log(num);
    console.log(rndm);
    console.log(er);
    if (num == rndm){
        er.textContent = "Congrats you guessed right! After 3 seconds i will pick a new number";
        timer = setTimeout(reload, 3000);
        
    }else if (num < rndm){
        er.textContent = "A little bit higher";
    }
    else {
        er.textContent = "A little bit lower";
    }
 num = null;   
}
function reload(){
    location.reload();
}



