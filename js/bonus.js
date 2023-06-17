/*==========================================   
   <<<< Функція створення бонусу життя >>>>    
===========================================*/  
function createBonusLife() {
    if (isGameOver) {
      return;
    }
  
    let left = random(150, document.querySelector('body').offsetWidth - 225);
    let bonusLife = document.createElement('div');
    bonusLife.className = "bonusLife";
    bonusLife.style.left = left + "px";
    app.appendChild(bonusLife);
  
    moveBonusLife(bonusLife);
}

/*================================================
  < Випадкова затримка створення бонусного життя >
=================================================*/

function createBonusLifeWithDelay() {
    let bonusLifeDelay = random(150000, 300000);
    createBonusLife();
    setTimeout(createBonusLifeWithDelay, bonusLifeDelay);
}
  
/*=======================
  < Рух бонусного життя >
========================*/

function moveBonusLife(bonusLife) {
    let timerID = setInterval(function() {
      bonusLife.style.top = bonusLife.offsetTop + 25 + "px";
  
      if (bonusLife.offsetTop > document.querySelector('body').offsetHeight) {
        removeBonusLife(bonusLife);
        clearInterval(timerID);
      } else {
        checkCollisionWithPlayer(bonusLife);
      }
    }, 1);
}
  
/*===============================================
  < Функція визначення перетину гравця і бонуса >
================================================*/
  
function isRectOverlap(rect1, rect2) {
  return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
  );
}

/*=====================
  < Додавання життів >
======================*/

function upLife() {
    if (lifesPlayer < 5) { 
      lifesPlayer++;
      createLifes();
      absorbLifeAudio();
    }
}

/*==========================
  < Видалення бонусу життя >
===========================*/

function removeBonusLife(bonusLife) {
    setTimeout(function() {
      bonusLife.remove();
    }, 1);
}
/*==============================================   
   <<<< Функція створення бонусу вибухівки >>>>    
===============================================*/

function createTnt() {
    if (isGameOver) {
        return;
    }

    let left = random(150, document.querySelector('body').offsetWidth - 225);
    let tnt = document.createElement('div');
    tnt.className = "tnt";
    tnt.style.left = left + "px";
    app.appendChild(tnt);

    moveTnt(tnt);
}

/*=================================================
  < Випадкова затримка створення бонусу вибухівки >
==================================================*/

function createTntWithDelay() {
    let tntDelay = random(150000, 300000);
    createTnt();
    setTimeout(createTntWithDelay, tntDelay);
}

/*=========================
  < Рух бонусу вибухівки >
==========================*/

function moveTnt(tnt) {
    let timerID = setInterval(function() {
        tnt.style.top = tnt.offsetTop + 25 + "px";

        if (tnt.offsetTop > document.querySelector('body').offsetHeight) {
            removeTnt(tnt);
            clearInterval(timerID);
        } else {
            checkCollisionTntWithPlayer(tnt);
        }
    }, 1);
}

/*==============================
  < Видалення бонусу вибухівки >
===============================*/

function removeTnt(tnt) {
    setTimeout(function() {
        tnt.remove();
    }, 1);
}
