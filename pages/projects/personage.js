const button = document.querySelector('.getPersonageButton');
const image = document.querySelector('.personagePicture');
const family= document.querySelector('.personageFamily');
const fullName = document.querySelector('.personageFullName');
const title = document.querySelector('.personageTitle');
button.addEventListener('click',getRandomPersonageInfo);

function getRandomPersonageInfo() {
   let randomPersonageImage = ''
   let randomPersonageFamily = ''
   let randomPersonageFullName = ''
   let randomPersonageTitle = ''


   const result =  fetch('https://thronesapi.com/api/v2/Characters')
   .then(response => response.json())
   .then(json => {
       
      const randomPersonageInfoIndex =Math.floor(Math.random()*json.length);

      randomPersonageImage += json[randomPersonageInfoIndex].imageUrl;
      image.setAttribute('src',randomPersonageImage);

      randomPersonageFamily += json[randomPersonageInfoIndex].family;
      family.innerHTML = randomPersonageFamily;

      randomPersonageFullName += json[randomPersonageInfoIndex].fullName;
      fullName.innerHTML =randomPersonageFullName;
 
      randomPersonageTitle += json[randomPersonageInfoIndex].title;
      title.innerHTML =randomPersonageTitle;

   
   });
} 

getRandomPersonageInfo();