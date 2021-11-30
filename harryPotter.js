const getSelectedValue = document.querySelector( '[name="house"]:checked');

//const toolbar = document.querySelector('.radio-toolbar');
//toolbar.addEventListener('change', handleIDChanges);
//function handleNameChanges(event){
//const changedHouse = event.target;
//if(changedHouse.ID == 'Gryffindor'){
//changedHouse.parentElement.classList.toggle('checked-style');
//}
//}

function loadCharacters(event) {
  event.preventDefault();
  getSelectedValue.value = "";   
  let API_URL ='https://hp-api.herokuapp.com/api/characters/';
  }

  fetch('https://hp-api.herokuapp.com/api/characters/')
	    .then(function(x) { 
	        return x.json() 
	    }).then(function(characterArray) {
	        let htmlTemplate = '';
	        for (let character of characterArray) {
	            if (character.house === 'Gryffindor') { //&& (getSelectedValue === "checked")????
	                htmlTemplate += `
					<div class ="Gryffindor">
	                    <h4>${character.name}</h4>                     
	                    <img src="${character.image}" alt="${character.name}" />
					</div>
	                `;
	            } else if (character.house === 'Slytherin') {
	                htmlTemplate += `
					<div class ="Slytherin">
	                    <h4>${character.name}</h4>                     
	                    <img src="${character.image}" alt="${character.name}" />
					</div>
	                `;
				} else if (character.house === 'Hufflepuff') {
	                htmlTemplate += `
					<div class ="Hufflepuff">
	                    <h4>${character.name}</h4>                     
	                    <img src="${character.image}" alt="${character.name}" />
					</div>
	                `;
				} else if (character.house === 'Ravenclaw') {
	                htmlTemplate += `
					<div class ="Ravenclaw">
	                    <h4>${character.name}</h4>                     
	                    <img src="${character.image}" alt="${character.name}" />
					</div>
	                `;
				} else if (character.house === '') {
					htmlTemplate += `
					<div class ="notaStudent">
	                    <h4>${character.name}</h4>                     
	                    <img src="${character.image}" alt="${character.name}" />
					</div>
	                `;
				}
	        }
	    	const charactersContainer = document.querySelector(".js-characters-container");
          	charactersContainer.innerHTML = htmlTemplate;
	    })//.catch(error => {
		//...
		//});
 
const form = document.querySelector(".js-search-form");
form.addEventListener("submit", loadCharacters);