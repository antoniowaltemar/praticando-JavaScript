let time;

function comecar() {
    time= setInterval(showtime, 1000);

}
function parar() {
    clearInterval(time);

}

function showtime() {
    let d= new Date;
    let h= d.getHours();
    let m= d.getMinutes();
    let s= d.getSeconds();
    let txt= h+":"+m+":"+s;

    document.querySelector(".demo").innerHTML= txt;
}


