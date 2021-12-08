const url = 'https://hp-api.herokuapp.com/api/characters/';
const btn = document.querySelector('#btn');
const output = document.querySelector('.output');
btn.addEventListener('click', (event) => {
    alert(getSelectedCheckboxValues('house'), loadCharacters);
});

function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

function loadCharacters(event) {
  event.preventDefault();
  //getSelectedCheckboxValues.values = values; 
  } fetch(url)
	.then(function(x) {return x.json()})
	.then(function(characterArray) {
	    let htmlTemplate = '';
	    for (let character of characterArray) {
	        if (getSelectedCheckboxValues('house') === 'Gryffindor') { 
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
			} else if (character.house === 'Others') {
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

//const form = document.querySelector("form");
//form.addEventListener("submit", loadCharacters);