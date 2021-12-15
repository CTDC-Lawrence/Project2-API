const url = 'https://hp-api.herokuapp.com/api/characters/';
const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
	event.preventDefault();
	loadCharacters();
});

function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

function loadCharacters() {

  fetch(url)
	.then(function(x) {return x.json()})
	.then(function(characterArray) {
		let houses = getSelectedCheckboxValues('house');  
		alert(houses);
	    let htmlTemplate = '';
	    for (let character of characterArray) {
			if ( houses.includes(character.house) ) {
				htmlTemplate += `
					<div class="${character.house}">
						<h4>${character.name}</h4>                     
						<img src="${character.image}" alt="${character.name}" />
					</div>
					`;	
			}
					
			//if (character.house === "") {
			//	htmlTemplate += `
			//	<div class="Others">
	        //        <h4>${character.name}</h4>                     
	        //        <img src="${character.image}" alt="${character.name}" />
			//	</div>
	        //    `;
			//} else 
	    }
	    const charactersContainer = document.querySelector(".js-characters-container");
        charactersContainer.innerHTML = htmlTemplate;
	}).catch(error => {
		alert('Try another selection')	
	});
} 
  

