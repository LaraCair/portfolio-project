const button = document.querySelector('.getPersonageButton');
const image = document.querySelector('.personagePicture');
const info = document.querySelector('.personageinfo')
button.addEventListener('click', getRandomPersonageinfo);

function getRandomPersonageImage() {
   const resalt =  fetch('https://thronesapi.com//api/v2/Characters')
   
    .then(response => response.json())
    .then(json => {
       image.setAttribute('src',json[0].imageURL)
    });
  
}

getRandomPersonageinfo();