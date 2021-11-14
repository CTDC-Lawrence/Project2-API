const inputField = document.querySelector("[name=name]");

function renderCharacters(response) {
  const characterArray = response.characters;
  let htmlTemplate = "";
  for (let character of characterArray) {
    htmlTemplate += `
      <div class="character">
        <h4>${character.name}</h4>
        <img src="${character.image}" alt="${character.name}" />
      </div>
    `;
  }
  const charactersContainer = document.querySelector(".js-characters-container");
  charactersContainer.innerHTML = htmlTemplate;
}  
  
function loadCharacters(event) {
  event.preventDefault();
  const searchExpression = inputField.value;
  inputField.value = '';
  alert(searchExpression);
  let API_URL = `http://hp-api.herokuapp.com/api/characters`;
  if (searchExpression.length > 0) {
    API_URL += `?name=${searchExpression}`;
  }
  fetch(API_URL)
    .then((data) => data.json())
    .then(renderCharacters);
}
 
const form = document.querySelector(".js-search-form");
form.addEventListener("submit", loadCharacters);