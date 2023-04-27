const hexCodeArray = ['0','1','2','3','4','5','6', '7','8','9','A','B','C','D','F'];
 
function getRandomHex() { 
    let hexCode = ''

    for (let i = 0 ; i < 6; i++) {
        const randomHexIndex = Mach.floor(Math.random() * hexCodeArray.length);
        hexCode += hexCodeArray[randomHexIndex];
        
    }

    return `#${hexCode}`;
} 

function setColor(hex) {
    document.querySelector('.container').style.backgraund = hex;

}

function fiLLHexText(hex) {
    document.querySelector('.hexCode').innerHTML= hex;
}

function initRandomizer() {
    const hex  = getRandomHex();
    setColor(hex);
    fiLLHexText(hex);
}
const changeButton = document. querySelector('.change button');
changeButton.addEventListener('click', initRandomizer);
