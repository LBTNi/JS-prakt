function celciusToFahrenheit(){
    const celcius = document.getElementById('celcius').value;
    const fahrenheit = (celcius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
}
function fahrenheitToCelcius(){
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celcius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celcius').value = celcius;
}
function kiloitgr(){
    const kilo = document.getElementById('kilo').value;
    const gr = kilo*1000;
    document.getElementById('gr').value = gr;
}
function gritkilo(){
    const gr = document.getElementById('gr').value;
    const kilo = gr/1000;
    document.getElementById('kilo').value = kilo;
}
function I(){
    const napr = document.getElementById('napr').value;
    const R = document.getElementById('R').value;
    const I = napr/R;
    document.getElementById('I').value = I;
}
function V(){
    const S = document.getElementById('S').value;
    const t = document.getElementById('t').value;
    const V = S/t;
    document.getElementById('V').value = V;
}
function sinh(){
    const s = document.getElementById('s').value;
    const h = s/3600;
    document.getElementById('h').value = h;
}
function hins(){
    const h = document.getElementById('h').value;
    const s = h*3600;
    document.getElementById('s').value = s;
}
function mlinl(){
    const ml = document.getElementById('ml').value;
    const l = ml/1000;
    document.getElementById('l').value = l;
}
function linml(){
    const l = document.getElementById('l').value;
    const ml = l*1000;
    document.getElementById('ml').value = ml;
}
function p(){
    const mp = document.getElementById('mp').value;
    const vp = document.getElementById('vp').value;
    const p = mp*vp;
    document.getElementById('p').value = p;
}
function l(){
    const vl = document.getElementById('vl').value;
    const T = document.getElementById('T').value;
    const l = vl*T;
    document.getElementById('l').value = l;
}