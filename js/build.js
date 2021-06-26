const SHIPFUS = [
    
    [5,'Cassin','Normal'],
    [6,'Downes','Normal'],
    [8,'Craven','Normal'],
    [9,'McCall','Normal'],
    [10,'Maury','Elite'],
    [11,'Fletcher','Rare'],
    [15,'Aulick','Normal'],
    [16,'Foote','Normal'],
    [17,'Spence','Normal'],
    [18,'Benson','Rare'],
    [19,'Laffey','Elite'],
    [27,'Hammann','Rare'],
    [29,'Omaha','Normal'],
    [30,'Raleigh','Normal'],
    [31,'Brooklyn','Rare'],
    [32,'Phoenix','Rare'],
    [33,'Helena','Elite'],
    [34,'Atlanta','Rare'],
    [35,'Juneau','Rare'],
    [36,'San_Diego','SuperRare'],
    [37,'Cleveland','Elite'],
    [39,'Pensacola','Normal'],
    [41,'Northampton','Rare'],
    [42,'Chicago','Rare'],
    [43,'Houston','Elite'],
    [44,'Portland','Rare'],
    [45,'Indianapolis','Elite'],
    [49,'Wichita','Elite'],
    [50,'Baltimore','SuperRare'],
    [52,'Nevada','Normal'],
    [53,'Oklahoma','Normal'],
    [54,'Pennsylvania','Rare'],
    [55,'Arizona','Elite'],
    [58,'Tennessee','Rare'],
    [59,'California','Rare'],
    [60,'Colorado','Elite'],
    [61,'Maryland','Elite'],
    [63,'North_Carolina','SuperRare'],
    [64,'Washington','SuperRare'],
    [68,'New_Jersey','UltraRare'],
    [70,'Long_Island','Rare'],
    [71,'Bogue','Normal'],
    [72,'Langley','Normal'],
    [73,'Lexington','Elite'],
    [74,'Saratoga','Elite'],
    [75,'Ranger','Normal'],
    [76,'Yorktown','Elite'],
    [77,'Enterprise','SuperRare'],
    [78,'Hornet','Elite'],
    [80,'Vestal','Elite'],
    [81,'Amazon','Rare'],
    [82,'Acasta','Rare'],
    [83,'Ardent','Rare'],
    [86,'Beagle','Normal'],
    [87,'Bulldog','Normal'],
    [88,'Comet','Normal'],
    [89,'Crescent','Normal'],
    [90,'Cygnet','Normal'],
    [91,'Foxhound','Normal'],
    [93,'Grenville','Elite'],
    [96,'Hardy','Elite'],
    [101,'Javelin','Elite'],
    [104,'Leander','Normal'],
    [105,'Achilles','Rare'],
    [106,'Ajax','Rare'],
    [107,'Dido','SuperRare'],
    [110,'Southampton','Rare'],
    [111,'Sheffield','Elite'],
    [113,'Gloucester','Elite'],
    [115,'Belfast','SuperRare'],
    [118,'Aurora','Elite'],
    [119,'London','Elite'],
    [120,'Shropshire','Rare'],
    [121,'Kent','Rare'],
    [122,'Suffolk','Rare'],
    [123,'Norfolk','Rare'],
    [124,'Dorsetshire','Elite'],
    [125,'York','Elite'],
    [126,'Exeter','Elite'],
    [127,'Renown','Elite'],
    [128,'Repulse','Rare'],
    [129,'Hood','SuperRare'],
    [130,'Queen_Elizabeth','Elite'],
    [131,'Warspite','SuperRare'],
    [132,'Nelson','Elite'],
    [133,'Rodney','Elite'],
    [134,'King_George_V','SuperRare'],
    [135,'Prince_of_Wales','SuperRare'],
    [136,'Duke_of_York','SuperRare'],
    [140,'Hermes','Normal'],
    [142,'Unicorn','Elite'],
    [143,'Eagle','Elite'],
    [144,'Ark_Royal','Elite'],
    [145,'Illustrious','SuperRare'],
    [146,'Victorious','SuperRare'],
    [147,'Formidable','SuperRare'],
    [148,'Glorious','Elite'],
    [149,'Erebus','Elite'],
    [150,'Terror','Elite'],
    [151,'Fubuki','Elite'],
    [155,'Ayanami','Elite'],
    [166,'Yukikaze','SuperRare'],
    [170,'Nowaki','Elite'],
    [171,'Hatsuharu','Rare'],
    [173,'Wakaba','Rare'],
    [174,'Hatsushimo','Rare'],
    [175,'Ariake','Rare'],
    [176,'Yuugure','Rare'],
    [177,'Kuroshio','Rare'],
    [178,'Oyashio','Rare'],
    [179,'Yuubari','Elite'],
    [182,'Nagara','Normal'],
    [186,'Kinu','Elite'],
    [188,'Mogami','Elite'],
    [189,'Mikuma','Elite'],
    [192,'Aoba','Normal'],
    [193,'Kinugasa','Normal'],
    [198,'Ashigara','Elite'],
    [200,'Takao','SuperRare'],
    [201,'Atago','SuperRare'],
    [205,'Hiei','Elite'],
    [207,'Kirishima','Elite'],
    [210,'Ise','Rare'],
    [211,'Hyuuga','Rare'],
    [212,'Nagato','SuperRare'],
    [214,'Kii','SuperRare'],
    [215,'Tosa','SuperRare'],
    [223,'Ryuujou','Elite'],
    [228,'Shoukaku','SuperRare'],
    [229,'Zuikaku','SuperRare'],
    [230,'Taihou','SuperRare'],
    [231,'Shinano','UltraRare'],
    [232,'Akashi','SuperRare'],
    [236,'Z23','Elite'],
    [237,'Z25','Elite'],
    [238,'Knigsberg','Normal'],
    [239,'Karlsruhe','Normal'],
    [240,'Kln','Normal'],
    [241,'Leipzig','Rare'],
    [242,'Admiral_Hipper','Elite'],
    [244,'Prinz_Eugen','SuperRare'],
    [245,'Deutschland','Elite'],
    [246,'Admiral_Graf_Spee','Elite'],
    [250,'Bismarck','SuperRare'],
    [251,'Tirpitz','SuperRare'],
    [252,'Graf_Zeppelin','SuperRare'],
    [255,'Chang_Chun','Elite'],
    [256,'Tai_Yuan','Elite'],
    [257,'Yat_Sen','Elite'],
    [258,'Ning_Hai','Elite'],
    [259,'Ping_Hai','Elite'],
    [262,'Avrora','SuperRare'],
    [263,'Bailey','Rare'],
    [264,'Z19','Rare'],
    [267,'Z46','SuperRare'],
    [269,'Kamikaze','Rare'],
    [270,'Matsukaze','Rare'],
    [271,'Mutsuki','Normal'],
    [272,'Kisaragi','Normal'],
    [274,'Uzuki','Normal'],
    [277,'Fumizuki','Rare'],
    [278,'Nagatsuki','Rare'],
    [288,'Kawakaze','SuperRare'],
    [293,'Kiyonami','Rare'],
    [296,'Harutsuki','Elite'],
    [297,'Yoizuki','Elite'],
    [305,'St_Louis','Elite'],
    [306,'Jupiter','Rare'],
    [307,'Jersey','Rare'],
    [310,'Naka','Rare'],
    [316,'Urakaze','Rare'],
    [317,'Isokaze','Rare'],
    [318,'Hamakaze','Rare'],
    [319,'Tanikaze','Rare'],
    [320,'Mikasa','SuperRare'],
    [322,'Noshiro','SuperRare'],
    [325,'Matchless','Elite'],
    [328,'Jamaica','Rare'],
    [329,'Montpelier','SuperRare'],
    [330,'Denver','Elite'],
    [331,'Asashio','Rare'],
    [332,'Ooshio','Rare'],
    [334,'Arashio','Rare'],
    [335,'Little_Bel','Elite'],
    [336,'Abercrombie','Elite'],
    [337,'Sussex','Rare'],
    [338,'I-19','SuperRare'],
    [339,'I-26','Elite'],
    [340,'I-58','Elite'],
    [341,'U-81','SuperRare'],
    [342,'Dace','Elite'],
    [343,'U-47','SuperRare'],
    [344,'U-557','Elite'],
    [345,'Z35','Elite'],
    [346,'Z18','Rare'],
    [347,'Le_Triomphant','SuperRare'],
    [348,'Forbin','Rare'],
    [350,'Surcouf','Elite'],
    [351,'Le_Mars','Rare'],
    [352,'Dunkerque','Elite'],
    [353,'Jean_Bart','SuperRare'],
    [354,'Massachusetts','SuperRare'],
    [355,'Bush','Rare'],
    [356,'Centaur','SuperRare'],
    [357,'Essex','SuperRare'],
    [358,'Albacore','SuperRare'],
    [359,'Le_Tmraire','Elite'],
    [360,'Memphis','Rare'],
    [362,'Hobby','Rare'],
    [363,'Kalk','Rare'],
    [364,'Minneapolis','SuperRare'],
    [365,'Hazelwood','Rare'],
    [366,'Concord','Rare'],
    [367,'Amagi','SuperRare'],
    [368,'Kaga_Battleship','SuperRare'],
    [369,'Hatakaze','Rare'],
    [371,'Sirius','SuperRare'],
    [372,'Curacoa','Rare'],
    [373,'Curlew','Rare'],
    [374,'Kimberly','Rare'],
    [375,'Mullany','Elite'],
    [376,'Chaser','Elite'],
    [378,'Shangri-La','SuperRare'],
    [379,'Z2','Elite'],
    [381,'I-13','SuperRare'],
    [382,'Suzuya','Elite'],
    [383,'Hiei-chan','Elite'],
    [384,'Akagi-chan','Elite'],
    [385,'Zeppy','Elite'],
    [386,'U-556','Elite'],
    [387,'U-73','Elite'],
    [388,'Z36','Elite'],
    [389,'Echo','Rare'],
    [390,'Lena','Elite'],
    [391,'Clevelad','Elite'],
    [393,'Swiftsure','SuperRare'],
    [394,'Le_Malin','SuperRare'],
    [395,'LOpinitre','Elite'],
    [396,'I-25','Elite'],
    [397,'I-56','Elite'],
    [398,'I-168','SuperRare'],
    [399,'U-101','SuperRare'],
    [400,'U-522','Elite'],
    [401,'Alabama','SuperRare'],
    [405,'Birmingham','Elite'],
    [406,'Aylwin','Rare'],
    [407,'Bache','Rare'],
    [408,'Black_Prince','Elite'],
    [409,'Stanly','Rare'],
    [410,'Littorio','SuperRare'],
    [412,'Giulio_Cesare','Elite'],
    [413,'Zara','SuperRare'],
    [416,'U-110','Elite'],
    [417,'Smalley','Rare'],
    [418,'Gascogne_','SuperRare'],
    [419,'Akagi_','SuperRare'],
    [420,'Cleveland_','Elite'],
    [422,'Admiral_Hipper_','Elite'],
    [423,'Glasgow','Rare'],
    [424,'Kasumi','Elite'],
    [425,'Suruga','SuperRare'],
    [426,'Ryuuhou','SuperRare'],
    [427,'Halsey_Powell','Rare'],
    [428,'Biloxi','Elite'],
    [431,'Grozny','Elite'],
    [433,'Tashkent','SuperRare'],
    [434,'Pamiat_Merkuria','Elite'],
    [435,'Kirov','SuperRare'],
    [436,'Chapayev','SuperRare'],
    [440,'Sovetskaya_Belorussiya','SuperRare'],
    [441,'Sovetskaya_Rossiya','SuperRare'],
    [442,'Intrepid','SuperRare'],
    [443,'Bremerton','SuperRare'],
    [444,'Cooper','Elite'],
    [445,'Reno','SuperRare'],
    [448,'Marblehead','Rare'],
    [449,'Hanazuki','Elite'],
    [450,'Naganami','Elite'],
    [452,'Tartu','Elite'],
    [453,'Richelieu','SuperRare'],
    [454,'Jeanne_dArc','SuperRare'],
    [455,'Algrie','SuperRare'],
    [457,'Vauquelin','Elite'],
    [460,'Eskimo','Elite'],
    [461,'Howe','SuperRare'],
    [462,'Perseus','SuperRare'],
    [463,'Hermione','SuperRare'],
    [464,'Valiant','Elite'],
    [466,'Z26','Elite'],
    [467,'U-96','SuperRare'],
    [468,'Suzutsuki','SuperRare'],
    [470,'Chitose','Elite'],
    [471,'Chiyoda','Elite'],
    [472,'Kashino','Elite'],
    [473,'Princeton','Elite'],
    [474,'Taihou_','SuperRare'],
    [475,'Tashkent_','SuperRare'],
    [476,'Dido_','SuperRare'],
    [477,'Albacore_','Elite'],
    [478,'Baltimore_','Elite'],
    [482,'Peter_Strasser','SuperRare'],
    [483,'Prinz_Heinrich','SuperRare'],
    [484,'U-37','SuperRare'],
    [485,'Weser','Elite'],
    [486,'Nrnberg','Elite'],
    [489,'Pola','SuperRare'],
    [490,'Vincenzo_Gioberti','Elite'],
    [493,'Ying_Swei','Elite'],
    [494,'Chao_Ho','Elite'],
    [495,'Penelope','Elite'],
    [496,'Tallinn','SuperRare'],
    [497,'Gremyashchy','Elite'],
    [498,'Murmansk','Elite'],
    [500,'Vittorio_Veneto','SuperRare'],
    [501,'Duca_degli_Abruzzi','SuperRare'],
    [502,'Aquila','SuperRare'],
    [504,'Maestrale','Elite'],
    [505,'Libeccio','Elite'],
    [506,'Nicoloso_da_Recco','Elite'],
    [508,'Allen_M','SuperRare'],
    [509,'Stephen_Potter','Elite'],
    [511,'Ticonderoga','SuperRare'],
    [512,'San_Francisco','SuperRare'],
    [513,'Archerfish','SuperRare'],
    [514,'Boise','Elite']
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

document.querySelector('#buildBtn').addEventListener('click', function(){

    let parrafo = true;
    let ordenes = document.getElementById('orders');

    let child = ordenes.lastElementChild;

    while (child){
        ordenes.removeChild(child);
        child = ordenes.lastElementChild;
    }

    for (let i = 0; i<shipsNum.value; i++){
        
        if (i > 4 && parrafo){ 
            document.querySelector('#orders').appendChild(document.createElement('p'));
            parrafo = false;
        }

        let ship = document.createElement('img');
        let shipId = random();
        let shipName = SHIPFUS[shipId][1];
        let shipRarity = SHIPFUS[shipId][2]
        console.log(shipName);
        console.log(shipId);
        ship.src = `media/imgs/ships/70px-${shipName}Icon.png`;
        ship.className = shipRarity;
        document.querySelector('#orders').appendChild(ship);
    }
    
})

function random(){
    let number = Math.round(Math.random() * (SHIPFUS.length - 1));
    return number;
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

function test(){
    for (let i = Number(0); i<SHIPFUS.length; i++){
        let ship = document.createElement('img');
        console.log(`[${i}-${SHIPFUS[i][0]}] - ${SHIPFUS[i][1]} length=${SHIPFUS.length}`);
        ship.src = `media/imgs/ships/70px-${SHIPFUS[i][1]}Icon.png`;
        ship.className = SHIPFUS[i][2];
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
//test();