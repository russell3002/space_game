/**
 * 1. Зробити рух астероїда. - готово
 * 2. Зробити збиття астероїда:
 *      - додати ефект вибуху. - готово
 * 3. Зробити поворот астероїда   -готово
 */


/** 
 *==================================
 *  < Функція створення астероїду >
 *==================================
 */
function createAsteroid(){
    if(isGameOver){
        return ;
      }
    let left = random(0, document.querySelector('body').offsetWidth / 2);
    let top = random(0, document.querySelector('body').offsetHeight / 2)
    let asteroid = document.createElement('div');
    asteroid.className = "asteroid";
    let ast = random (1, 2);
    if(ast==1){
        asteroid.style.left = left + "px";
        asteroid.style.top = -60 + "px";
    } else {
        asteroid.style.left = -100 + "px";
        asteroid.style.top = top + "px";
    }
    
    app.appendChild(asteroid);
    moveAsteroid(asteroid);
}
/** 
 *==============================
 *  < Функція руху астероїду >
 *==============================
 */
function moveAsteroid(asteroid){
    let rotationAngle = 0;
    let timerID = setInterval(function(){
        asteroid.style.top = asteroid.offsetTop + 2 + "px";
        asteroid.style.left = asteroid.offsetLeft + 2 + "px";
        asteroid.style.transform = "rotate(" + rotationAngle + "deg)";
        rotationAngle += 1;

        if(asteroid.offsetTop > document.querySelector('body').offsetHeight ||
        asteroid.offsetLeft > document.querySelector('body').offsetWidth){
            removeAsteroid(asteroid);
            clearInterval(timerID);
        }
    }, 100);
};

let asteroidDelay = random(20000, 30000);
function createAsteroidWithDelay() { 
  createAsteroid();
  setTimeout(createAsteroidWithDelay, asteroidDelay);
}
/** 
 *==================================
 *  < Функція видалення астероїду >
 *==================================
 */
 function removeAsteroid(asteroid) {
  asteroid.className = "asteroid boom";
  setTimeout(function() {
    asteroid.remove();
  }, 800);
}
function createPlanet() {
    let skin = 'skin-' + random(1, 4);
    let planet = document.createElement('div');
    planet.className = "planet " + skin;
    planet.style.left = random(100, document.querySelector('body').offsetWidth - 100) + "px";
    app.appendChild(planet);

    let timerId = setInterval(function(){
      planet.style.top = planet.offsetTop + 1 + "px";

      if(planet.offsetTop > document.querySelector('body').offsetHeight){
        planet.remove();
        clearInterval(timerId);
        setTimeout(function(){
          createPlanet();
        }, random(1000, 100000));
      }
    }, 10);
    
  };
  

setTimeout(function(){
    createPlanet();
}, 0)