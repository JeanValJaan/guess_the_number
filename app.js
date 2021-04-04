button = btn.addEventListener('click', isEqual);
let rndm = parseInt(1000*Math.random());
let er = document.getElementById("err");
let timer;
counter = 10;
    function isEqual () {
        let num = document.getElementById("num").value;
        console.log(num);
        console.log(rndm);
        console.log(er);
        if (counter == 0){
            er.textContent = "You lost the game! Dont worry after 3 seconds i will pick a new number.";
            timer = setTimeout(reload, 3000);

        } else if (num == rndm){
            er.textContent = "Congrats you guessed right! After 3 seconds i will pick a new number";
            timer = setTimeout(reload, 3000);
            
        }else if (num < rndm){
            er.textContent = `A little bit higher. You have ${counter} chances left`;
            counter--
        }
        else {
            er.textContent = `A little bit lower. You have ${counter} chances left`;
            counter--
        }
     num = null;   
    }
    function reload(){
        location.reload();
    }
 
