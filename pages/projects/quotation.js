const hexCodeArray = ['0','1','2','3','4','5','6', '7','8','9','A','B','C','D','F'];
 

const verbArray = ['Владеть','Уметь','вытащить','молчит','будешь','сделай','появится', 
'случается','принимать','усложняем','летищь','поднимаешься','появится','летишь','признавать','понииают','хочет','понять',
'жаловаться','удваивать','смеяться','уничтожать'];
const nounArray = ['ненависть','голова','удел','мозгов','свечи','фонарь','вещь',
'зло','гений'];
const abjectivesArray = ['побежденных','очеидное','невозможного','трудное'];
const collocationArray = ['мы должны','лишь те','над ней','лищь те','кто хуже нас',
'те ктолучше нас', 'им провто не до нас'];
const authornameArray = ['Конфйций','Алексей','Бернард','Наполеон', 'Омар'];
const authorsurnameArray = ['Вебер','Бонапард','Хаям','Толстой','Конфуций','Фазах'];

function getRandomHex() { 
    let hexCode = ''

    for (let i = 0 ; i < 6; i++) {
        const randomHexIndex = Math.floor(Math.random() * hexCodeArray.length);
        hexCode += hexCodeArray[randomHexIndex];
        
    }

    return `${hexCode}`;
} 

function setColor(hex) {
    document.querySelector('.container').style.backgraund = hex;

}

function getRandomVerb() {
    
    const randomverbIndex = Math.floor(Math.random() * verbArray.length);
    return verbArray[randomverbIndex];
       
}

function getRandomNoun(){
       
    const randomnounIndex = Math.floor(Math.random() * nounArray.length);
    return nounArray[randomnounIndex];
       
}

function getRandomAbjectives(){
    
    const randomabjectivesIndex = Math.floor(Math.random() * abjectivesArray.length);
    return abjectivesArray[randomabjectivesIndex]
}

function getRandomcollocation(){
        
    const randomCollocationIndex = Math.floor(Math.random() * collocationArray.length);
    return collocationArray[randomCollocationIndex];
    
    
}

function getRandomAuthorname(){
    
    const randomauthornamesIndex = Math.floor(Math.random() * authornameArray.length);
    return authornameArray[randomauthornamesIndex];
    
    
}

function getRandomAuthorsurname(){
    
    const randomauthorsurnameIndex = Math.floor(Math.random() * authorsurnameArray.length);
    return  authorsurnameArray[randomauthorsurnameIndex];
    
}

function fiLLQuotationText() {
    const phrase = getRandomNoun() + " " + getRandomVerb() + " " + getRandomAbjectives() + " " + getRandomcollocation();
    document.querySelector('.quotation').innerHTML= phrase;
}

function fiLLAuthorText() {
    const author = getRandomAuthorname() + " " + getRandomAuthorsurname();
    document.querySelector('.author').innerHTML= author;
}


function initRandomizer() {
    const hex  = getRandomHex();
    setColor(hex);
    fiLLQuotationText();
    fiLLAuthorText();

}
const changeButton = document.querySelector('.change button');
changeButton.addEventListener('click', initRandomizer);
