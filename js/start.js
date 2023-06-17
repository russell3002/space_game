/**=================
 *  < Початок гри >
 ==================*/

let btnStartGame = document.getElementById('btnStartGame');

btnStartGame.onclick = function(){
    let startGame = document.querySelector('.start-game');
        startGame.style.display = 'none';
    let skin = document.querySelector('.skins input[type=radio]:checked').value;
    createPlayer(skin);
    createEnemyWithDelay();
    createAsteroidWithDelay();
    bgSound();
    createLifes();
    createBonusLifeWithDelay();
    createTntWithDelay();
}
/**================
 *  < Кінець гри >
 =================*/

function endGame(){
    let endGameBlock = document.querySelector('.end-game');
        endGameBlock.classList.remove('hidden');
        isGameOver = true;
        app.innerHTML = "";

}

let btnRestartGame = document.querySelector('#btnRestartGame');

btnRestartGame.onclick = function(){
    location.reload();
}