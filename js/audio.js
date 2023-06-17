let audioPlayer = document.getElementById('audio');

/**==================
 *  < Звук пострілу >
 ===================*/
 let audioBlaster = "";
function blasterSound(){
    if (player.classList.contains('skin1')){
        audioBlaster = new Audio('sound/blaster1.mp3');
    }
    if(player.classList.contains('skin2')){
        audioBlaster = new Audio('sound/blaster2.mp3');
    }
    if(player.classList.contains('skin3')){
        audioBlaster = new Audio('sound/blaster3.mp3');
    }
    audioBlaster.volume = 0.4;
    audioBlaster.play();
    audioBlaster.muted = muted;
}



/**===================
 *  < Фонова музика >
 ====================*/

function bgSound(){
    audioPlayer.volume = 0.1;
    audioPlayer.play();
}

/**=================
 *  < Звук вибуху >
 ==================*/

function boomSound(){
    let audioBoom = new Audio('sound/boom.mp3');
    audioBoom.play();
    audioBoom.muted = muted;
}

/**========================
 *  < Звук втрати життя >
 =========================*/

function lossOfLifeAudio(){
    let audioAlarm = new Audio('sound/alarm.mp3');
    audio.volume = 0.1;
    audioAlarm.play();
    audioAlarm.muted = muted;
}

function absorbLifeAudio(){
    let audioLife = new Audio('sound/absorb_life.mp3');
    audio.volume = 0.1;
    audioLife.play();
    audioLife.muted = muted;
}

function tntAudio(){
    let audioTnt = new Audio('sound/big_boom.mp3');
    audioTnt.volume = 0.3;
    audioTnt.play();
    audioTnt.muted = muted;
}

/**=======================
 *  < Керування звуком >
 ========================*/

let soundBtn = document.querySelector('.menu .audio .sound');
let muted = false;

soundBtn.onclick = function(){
    let soundOnIcon = document.querySelector('.menu .audio .sound .sound-on');
    let soundOffIcon = document.querySelector('.menu .audio .sound .sound-off');
    if(!muted){
        soundOnIcon.classList.add('hidden');
        soundOffIcon.classList.remove('hidden');
        muted = true;
    } else {
        soundOffIcon.classList.add('hidden');
        soundOnIcon.classList.remove('hidden');
        muted = false;
    }
}

/**========================
 *  < Керування музикою >
 =========================*/

let musicBtn = document.querySelector('.menu .audio .music');
let mutedM = false;

musicBtn.onclick = function(){
    let musicOnIcon = document.querySelector('.menu .audio .music .music-on');
    let musicOffIcon = document.querySelector('.menu .audio .music .music-off');
    if(!mutedM){
        musicOnIcon.classList.add('hidden');
        musicOffIcon.classList.remove('hidden');
        mutedM = true;
    } else {
        musicOffIcon.classList.add('hidden');
        musicOnIcon.classList.remove('hidden');
        mutedM = false;
    }    
    audioPlayer.muted = mutedM;
}