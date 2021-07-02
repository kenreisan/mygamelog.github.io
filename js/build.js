const LIGHTPOOLE = [
    [118,'Aurora','Elite'],
    [428,'Biloxi','Elite'],
    [408,'Black_Prince','Elite'],
    [255,'Chang_Chun','Elite'],
    [391,'Clevelad','Elite'],
    [330,'Denver','Elite'],
    [151,'Fubuki','Elite'],
    [113,'Gloucester','Elite'],
    [296,'Harutsuki','Elite'],
    [101,'Javelin','Elite'],
    [19,'Laffey','Elite'],
    [359,'Le_Tmraire','Elite'],
    [390,'Lena','Elite'],
    [335,'Little_Bel','Elite'],
    [395,'LOpinitre','Elite'],
    [325,'Matchless','Elite'],
    [189,'Mikuma','Elite'],
    [188,'Mogami','Elite'],
    [375,'Mullany','Elite'],
    [258,'Ning_Hai','Elite'],
    [170,'Nowaki','Elite'],
    [259,'Ping_Hai','Elite'],
    [111,'Sheffield','Elite'],
    [305,'St_Louis','Elite'],
    [256,'Tai_Yuan','Elite'],
    [257,'Yat_Sen','Elite'],
    [297,'Yoizuki','Elite'],
    [237,'Z25','Elite'],
    [345,'Z35','Elite'],
    [155,'Ayanami','Elite'],
    [37,'Cleveland','Elite'],
    [376,'Chaser','Elite'],
    [33,'Helena','Elite'],
]

const LIGHTPOOLSR = [
    [232,'Akashi','SuperRare'],
    [262,'Avrora','SuperRare'],
    [115,'Belfast','SuperRare'],
    [107,'Dido','SuperRare'],
    [288,'Kawakaze','SuperRare'],
    [347,'Le_Triomphant','SuperRare'],
    [394,'Le_Malin','SuperRare'],
    [329,'Montpelier','SuperRare'],
    [36,'San_Diego','SuperRare'],
    [371,'Sirius','SuperRare'],
    [393,'Swiftsure','SuperRare'],
    [166,'Yukikaze','SuperRare'],
    [267,'Z46','SuperRare'],
]

let shipsNum = document.querySelector('#shipsNum');
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

/* CONSTRUCCTION RATES 
 * Super Rare 7%
 * Elite 12%
 * Rare 51%
 * Common 30%
 * Super Rare Focused 2%
 * Super Rare Exchange Focused 0.5%
 * Elite Focused 2.5%
 * Elite Exchange Focused 2.5%
 * Rare Focused 5%
*/


document.querySelector('#buildBtn').addEventListener('click', function(){

    let parrafo = true;
    let ordenes = document.getElementById('orders');

    let child = ordenes.lastElementChild;

    while (child){
        ordenes.removeChild(child);
        child = ordenes.lastElementChild;
    }

    for (let i = 0; i<shipsNum.value; i++){

        //document.querySelector('#orders').appendChild(document.createElement('div', {className: 'row'}, {id: 'row1'}));
        
        if (i > 4 && parrafo){ 
            //document.querySelector('#orders').appendChild(document.createElement('div', {className: 'row'}, {id: 'row2'}));
            document.querySelector('#orders').appendChild(document.createElement('p'));
            parrafo = false;
        }

        let ship = document.createElement('img');
        let shipLabel = document.createElement('label');
        let division = document.createElement('div');
        let division2 = document.createElement('div');
        //let parrafo = document.createElement('p');
        
        let shipData = building(LIGHTPOOLN, LIGHTPOOLR, LIGHTPOOLE, LIGHTPOOLSR, 55, 26, 12);
        
        let shipId = shipData[0];
        let shipName = shipData[1];
        let shipRarity = shipData[2];
        console.log(shipName);
        console.log(shipId);
        ship.src = `media/imgs/ships/70px-${shipName}Icon.png`;
        //ship.className = shipRarity;
        division.className = shipRarity
        division.id = shipName + i;
        division2.id = shipName + i + 'd';
        division2.style = 'font-size:10px; align: center; text-overflow: ellipsis; width:66px;'
        shipLabel.textContent = shipName;
        //document.querySelector('#orders').appendChild(ship);
        document.querySelector('#orders').appendChild(division);
        document.querySelector('#'+ shipName + i).appendChild(ship);
        document.querySelector('#'+ shipName + i).appendChild(division2);
        //document.querySelector('#'+ shipName + i + 'd').appendChild(parrafo);
        document.querySelector('#'+ shipName + i + 'd').appendChild(shipLabel);
    }
    
})

function random(cant){
    //let number = Math.round(Math.random() * (LIGHTPOOL.length - 1));
    let number = Math.round(Math.random() * cant);
    console.log(`random number: ${number}`)
    return number;
}

function building(normal, rare, elite, sr, rateCommon = 30, rateRare = 51, rateElite = 12){

    let shipId;
    let rndNumber = random(100);

    if (rndNumber === (11) || rndNumber === (22) || rndNumber === (33) || rndNumber === (44) || rndNumber === (55) || rndNumber === (66) || rndNumber === (77)){
        shipId = random(sr.length - 1);
        return sr[shipId];
    }else if (rndNumber === (12) ||
        rndNumber === (21) ||
        rndNumber === (23) ||
        rndNumber === (32) ||
        rndNumber === (34) ||
        rndNumber === (43) ||
        rndNumber === (45) ||
        rndNumber === (54) ||
        rndNumber === (56) ||
        rndNumber === (65) ||
        rndNumber === (67) ||
        rndNumber === (76)){
            shipId = random(elite.length - 1);
            return elite[shipId];
    }else if (rndNumber === (9) ||
        rndNumber === (10) ||
        rndNumber === (13) ||
        rndNumber === (14) ||
        rndNumber === (19) ||
        rndNumber === (20) ||
        rndNumber === (24) ||
        rndNumber === (25) ||
        rndNumber === (30) ||
        rndNumber === (31) ||
        rndNumber === (35) ||
        rndNumber === (36) ||
        rndNumber === (41) ||
        rndNumber === (42) ||
        rndNumber === (46) ||
        rndNumber === (47) ||
        rndNumber === (52) ||
        rndNumber === (53) ||
        rndNumber === (57) ||
        rndNumber === (58) ||
        rndNumber === (63) ||
        rndNumber === (64) ||
        rndNumber === (68) ||
        rndNumber === (69) ||
        rndNumber === (75) ||
        rndNumber === (76)){
            shipId = random(rare.length - 1);
            return rare[shipId];
    }else{
        shipId = random(normal.length - 1);
        return normal[shipId];
    }

    /*
    if (rndNumber <= rateCommon){
        
        shipId = random(normal.length - 1);
        return normal[shipId];

    }else if(rndNumber > rateCommon && rndNumber <= (rateCommon+rateRare)){

        shipId = random(rare.length - 1);
        return rare[shipId];

    }else if((rateCommon+rateRare) > 81 && rndNumber <= (rateCommon+rateRare+rateElite)){

        shipId = random(elite.length - 1);
        return elite[shipId];

    }else{

        shipId = random(sr.length - 1);
        return sr[shipId];
    }*/
}



/*PARA ESTRUCTURAR MEJOR*/

class Pool{
    constructor(pool){
        this.pool = pool;
    }
}

class Ship{
    constructor(time, rareza, nombre){
        
    }
}
//Funciones para pruebas

function test(poolSelect){
    for (let i = Number(0); i<poolSelect.length; i++){
        let ship = document.createElement('img');
        console.log(`[${i}-${poolSelect[i][0]}] - ${poolSelect[i][1]} length=${poolSelect.length}`);
        ship.src = `media/imgs/ships/70px-${poolSelect[i][1]}Icon.png`;
        ship.className = poolSelect[i][2];
        document.querySelector('#orders').appendChild(ship);
    }
}

function testUltra(){
    let ship = document.createElement('img');
    ship.src = `media/imgs/ships/70px-New_JerseyIcon.png`;
    ship.className = 'UltraRare';
    document.querySelector('#orders').appendChild(ship);
}

//testUltra()
//test(LIGHTPOOL);
//building(LIGHTPOOL);