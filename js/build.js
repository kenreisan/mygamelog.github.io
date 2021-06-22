
const banner = document.querySelector('#banner');
const pool = document.getElementsByClassName('btn-check');

document.querySelector('#btnradio1').addEventListener('click', function(){
    if (pool[0].checked === true){
        banner.src = 'media/imgs/TilteScreen.png';
    }
});

document.querySelector('#btnradio2').addEventListener('click', function(){
    if (pool[1].checked === true){
        banner.src = 'media/imgs/kirishima-horn-ships.png';
    }
});

document.querySelector('#btnradio3').addEventListener('click', function(){
    if (pool[2].checked === true){
        banner.src = 'media/imgs/main-destroyers.png';
    }
});

document.querySelector('#btnradio4').addEventListener('click', function(){
    if (pool[3].checked === true){
        banner.src = 'media/imgs/tea-hermoione-perseus-chesire.png';
    }
});

document.querySelector('#buildBtn').addEventListener('click', function(){
    let ship = document.createElement('img');
    ship.src = 'media/imgs/ships/60px-Admiral_Graf_SpeeIcon.png'
    document.querySelector('#orders').appendChild(ship);
})