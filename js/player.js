/**
 *===============================
*  < Функція створення гравця >
*===============================
*/

let player = null;
let lifesPlayer = 5;

function createPlayer(skin){
    player = document.createElement('div');
    player.className = skin;
    player.id = 'player';

    app.appendChild(player);
}

// Функція зміни рахунку
let gameScore = 0;
function changeScore(score){
    gameScore = gameScore + score;
    let scoreBlockText = document.querySelector('#score span');
    scoreBlockText.innerText = gameScore;
}

/** 
 *===========================================================
*  < Призначення клавіш руху гравця і здійснення пострілу >
*===========================================================
*/
document.onkeydown = function(event){
    switch(event.code){
        case "KeyA":
            moveLeft();
            break;
        case "KeyD":
            moveRight();
            break;
        case "ArrowLeft":
            moveLeft();
            break;
        case "ArrowRight":
            moveRight();
            break;
        case "Space":
            shot();
            break;
    }
};

function moveLeft(){
    if(player.offsetLeft > document.querySelector('body').offsetLeft + 25){
        player.style.left = player.offsetLeft - 60 + "px";
    }
}

function moveRight(){
    if(player.offsetLeft + player.offsetWidth < document.querySelector('body').offsetWidth - 50){
        player.style.left = player.offsetLeft + 60 + "px";
    }
}

/** 
 *==========================================================================
*  < Функція здійснення пострілу, руху кулі і знищення її після влучення >
*==========================================================================
*/
let pos = 1;
let pos1 = "";
let pos2 = "";
let topShot = "";

function shot() {
    let bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.top = player.offsetTop + topShot + "px";
    if(player.classList.contains('skin1')){
    pos1 = 61;
    pos2 = 52;
    bullet.classList.add('skin1')
    topShot = 15;
    } 
    if(player.classList.contains('skin3')){
    pos1 = 11;
    pos2 = 5;
    bullet.classList.add('skin2')
    topShot = -15;
    } if(player.classList.contains('skin2')){
    pos1 = 2;
    pos2 = -2;
    bullet.classList.add('skin3')
    topShot = -20
    }

    
    if(pos == 1){
        bullet.style.left = player.offsetLeft + (player.offsetWidth / 2) - pos1 + "px";
        pos = 2;
    } else {
        bullet.style.left = player.offsetLeft + (player.offsetWidth / 2) + pos2 + "px";
        pos = 1;
    }
    
    app.appendChild(bullet);
    blasterSound();

    let timerID = setInterval(function() {
        let hitEnemy = isHitEnemy(bullet);
        let hitAsteroid = isHitAsteroid(bullet);

        if (hitEnemy || hitAsteroid || bullet.offsetTop < 0) {
            bullet.remove();
            clearInterval(timerID);
        }
        bullet.style.top = bullet.offsetTop - 30 + "px";

    }, 100);
}

/** 
 *====================================================
*  < Функція потрапляння по ворогу і його знищення >
*====================================================
*/ 
function isHitEnemy(bullet){
    let enemies = document.querySelectorAll('.enemy');
    for(let i = 0; i < enemies.length; i++){
        let enemy = enemies[i];
        if (enemy != null && !enemy.classList.contains('boom')){
            let top = bullet.offsetTop > enemy.offsetTop && bullet.offsetTop < enemy.offsetTop + enemy.offsetHeight;
            let left = bullet.offsetLeft > enemy.offsetLeft && bullet.offsetLeft < enemy.offsetLeft + enemy.offsetWidth;
            if(top && left){
                removeEnemy(enemy);
                boomSound();
                changeScore(1);
                return true;
            }
        }    
    }
    return false;
}

/** 
 *========================================================
*  < Функція потрапляння по астероїду і його знищення >
*========================================================
*/
function isHitAsteroid(asteroid){
    let asteroids = document.querySelectorAll('.asteroid');
    for(let y = 0; y < asteroids.length; y++){
        let currentAsteroid = asteroids[y];
        if (currentAsteroid != null && !currentAsteroid.classList.contains('boom')){
            let top = asteroid.offsetTop > currentAsteroid.offsetTop && asteroid.offsetTop < currentAsteroid.offsetTop + currentAsteroid.offsetHeight;
            let left = asteroid.offsetLeft > currentAsteroid.offsetLeft && asteroid.offsetLeft < currentAsteroid.offsetLeft + currentAsteroid.offsetWidth;
            if(top && left){
                removeAsteroid(currentAsteroid);
                boomSound();
                changeScore(5);
                return true;
            }
        }    
    }
    return false;
}

/**======================================
 *  < Функція створення і втрати життів >
 =======================================*/

function lossOfLife(){
    lifesPlayer--;

    if(lifesPlayer <= 0){
        endGame();
    }
    createLifes();
}

function createLifes() {
    let lifesBlock = document.querySelector('.menu .lifes');
    lifesBlock.innerHTML = "";

    for (let i = 0; i < lifesPlayer; i++) {
    let span = document.createElement('span');
    lifesBlock.appendChild(span);
    }
}

function checkCollisionWithPlayer(bonusLife) {
    let bonusLifeRect = bonusLife.getBoundingClientRect();
    let playerRect = player.getBoundingClientRect();

    if (isRectOverlap(bonusLifeRect, playerRect)) {
        removeBonusLife(bonusLife);
        upLife();
    }
}

/*=============================================================================
  < Функція поглинанн бонусу вибухівки при контакті і запуск знищення ворогів >
==============================================================================*/

function checkCollisionTntWithPlayer(tnt) {
    let tntRect = tnt.getBoundingClientRect();
    let playerRect = player.getBoundingClientRect();

    if (isRectOverlap(tntRect, playerRect)) {
        removeTnt(tnt);
        tntAudio();
        destroyAllEnemies();
        destroyAllAsteroids();
    }
}

/*==========================================
  < Функція знищення всіх наявних ворогів >
===========================================*/

function destroyAllEnemies() {
    let enemies = document.querySelectorAll('.enemy');
    enemies.forEach(function(enemy) {
        enemy.classList.add('boom');
        removeEnemy(enemy);
        changeScore(1);
        
    });
}

/*=============================================
  < Функція знищення всіх наявних астероїдів >
==============================================*/

function destroyAllAsteroids() {
    let asteroids = document.querySelectorAll('.asteroid');
    asteroids.forEach(function(asteroid) {
        asteroid.classList.add('boom');
        removeAsteroid(asteroid);
        changeScore(5);
    });
}
 
