function celciusToFahrenheit(){
    let celcius = document.getElementById('celcius').value;
    let fahrenheit = (celcius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
}
function fahrenheitToCelcius(){
    let fahrenheit = document.getElementById('fahrenheit').value;
    let celcius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celcius').value = celcius;
}
function kiloitgr(){
    let kilo = document.getElementById('kilo').value;
    let gr = kilo*1000;
    document.getElementById('gr').value = gr;
}
function gritkilo(){
    let gr = document.getElementById('gr').value;
    let kilo = gr/1000;
    document.getElementById('kilo').value = kilo;
}
function I(){
    let napr = document.getElementById('napr').value;
    let R = document.getElementById('R').value;
    let I = napr/R;
    document.getElementById('I').value = I;
}
function V(){
    let S = document.getElementById('S').value;
    let t = document.getElementById('t').value;
    let V = S/t;
    document.getElementById('V').value = V;
}
function sinh(){
    let s = document.getElementById('s').value;
    let h = s/3600;
    document.getElementById('h').value = h;
}
function hins(){
    let h = document.getElementById('h').value;
    let s = h*3600;
    document.getElementById('s').value = s;
}
function mlinl(){
    let ml = document.getElementById('ml').value;
    let l = ml/1000;
    document.getElementById('l').value = l;
}
function linml(){
    let l = document.getElementById('l').value;
    let ml = l*1000;
    document.getElementById('ml').value = ml;
}
function p(){
    let mp = document.getElementById('mp').value;
    let vp = document.getElementById('vp').value;
    let p = mp*vp;
    document.getElementById('p').value = p;
}
function l(){
    let vl = document.getElementById('vl').value;
    let T = document.getElementById('T').value;
    let l = vl*T;
    document.getElementById('l').value = l;
}