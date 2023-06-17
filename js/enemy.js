/** 
 *===============================
 *  < Функція створення ворога >
 *===============================
 */
function createEnemy(){
  if(isGameOver){
    return ;
  }
  let left = random(150, document.querySelector('body').offsetWidth - 225);
  let enemy = document.createElement('div');
      enemy.className = "enemy " + skinEnemy();
      enemy.style.left = left + "px";

  
  app.appendChild(enemy);
  moveEnemy(enemy);
}



function skinEnemy(){
  if(random(1, 2) == 1){
      return"skin1";
  } else {
      return"skin2";
  }
}


/** 
 *=========================================================================
 *  < Функція руху ворога зі зміною швидкості залежно від кількості балів>
 *=========================================================================
 */



function moveEnemy(enemy){
  let timerID = setInterval(function(){
    let speedEnemy = 5;
let enemyDelay = ""
if(gameScore < 10){
  speedEnemy = 5;
}
if(gameScore >= 10 && gameScore < 20){
  speedEnemy = 10;
}
if(gameScore >= 20 && gameScore < 30){
  speedEnemy = 15;
}
if(gameScore >= 30 && gameScore < 40){
  speedEnemy = 20;
}
if(gameScore >= 40 && gameScore < 50){
  speedEnemy = 25;
}
if(gameScore >= 50 && gameScore < 60){
  speedEnemy = 30;
}
if(gameScore >= 60){
  speedEnemy = 45;
}
    enemy.style.top = enemy.offsetTop + speedEnemy + "px";

    if(enemy.offsetTop > document.querySelector('body').offsetHeight){
      removeEnemy(enemy);
      clearInterval(timerID);
      lossOfLife();
      lossOfLifeAudio();
    }
  }, 1)
}

/*=======================================================================================================
  < Функція випадкової частоти створення ворога зі збілшенням цієї частоти залежно від кількості балів >
=======================================================================================================*/


function createEnemyWithDelay() { 
let enemyDelay = random(5000, 10000);
if(gameScore < 10){
  enemyDelay = random(5000, 10000);
}
if(gameScore >= 10 && gameScore < 20){
  enemyDelay = random(4000, 9000);
} 
if(gameScore >= 20 && gameScore < 30){
  enemyDelay = random(3000, 8000);
}
if(gameScore >= 30 && gameScore < 40){
  enemyDelay = random(2000, 7000);
} 
if(gameScore >= 40 && gameScore < 50){
  enemyDelay = random(2000, 6000);
}
if(gameScore >= 50 && gameScore < 60){
  enemyDelay = random(2000, 5000);
}
if(gameScore >= 60){
  enemyDelay = random(2000, 3000)
}
  createEnemy();
  setTimeout(createEnemyWithDelay, enemyDelay);
}

/** 
 *===============================
 *  < Функція видалення ворога >
 *===============================
 */
 function removeEnemy(enemy) {
  if (enemy.classList.contains('skin1')){
    enemy.className = "enemy boom1";
  }
  if (enemy.classList.contains('skin2')){
    enemy.className = "enemy boom2";
  }
  
  setTimeout(function() {
    enemy.remove();
  }, 800);
}
