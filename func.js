function celciusToFahrenheit(){
    const celcius = document.getElementById('celcius').value;
    const fahrenheit=(celcius * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit);
}
function fahrenheitToCelcius(){
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celcius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celcius').value = parseFloat(celcius);
}
function kiloitgr(){
    const kilo = document.getElementById('kilo').value;
    const gr = kilo*1000;
    document.getElementById('gr').value = parseFloat(gr);
}
function gritkilo(){
    const gr = document.getElementById('gr').value;
    const kilo = gr/1000;
    document.getElementById('kilo').value = parseFloat(kilo);
}
function streigh(){
    const napr = document.getElementById('napr').value;
    const sopr = document.getElementById('sopr').value;
    const streigh = napr/sopr;
    document.getElementById('streigh').value = parseFloat(streigh);
}
function speedv(){
    const range = document.getElementById('range').value;
    const time = document.getElementById('time').value;
    const speedv = range/time;
    document.getElementById('speedv').value = parseFloat(speedv);
}
function secondinhour(){
    const second = document.getElementById('second').value;
    const hour = second/3600;
    document.getElementById('hour').value = parseFloat(hour);
}
function hourinsecond(){
    const hour = document.getElementById('hour').value;
    const second = hour*3600;
    document.getElementById('second').value = parseFloat(second);
}
function mlitrinlitr(){
    const mlitr = document.getElementById('mlitr').value;
    const litr = mlitr/1000;
    document.getElementById('litr').value = parseFloat(litr);
}
function litrinmlitr(){
    const litr = document.getElementById('litr').value;
    const mlitr = litr*1000;
    document.getElementById('mlitr').value = parseFloat(mlitr);
}
function impuls(){
    const masspuls = document.getElementById('masspuls').value;
    const speedpuls = document.getElementById('speedpuls').value;
    const impuls = masspuls*speedpuls;
    document.getElementById('impuls').value = parseFloat(impuls);
}
function lymd(){
    const speed = document.getElementById('speed').value;
    const Takt = document.getElementById('Takt').value;
    const lymd = speed*Takt;
    document.getElementById('lymd').value = parseFloat(lymd);
}