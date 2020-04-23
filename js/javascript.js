// All the ids and stuff
const customName = document.getElementById('customname');
const generate = document.querySelector('.generate');
const quoteNumber = document.querySelector("#quoteNumber");
const story = document.querySelector('.story');

// Arrays holding all the sentence parts
let storyText = ['Now listen here Bob, did you know that '];
let insertX = ['dogs ','rocks ','toilets ', 'frogs ', 'Italians ', 'famous movie directors ', 'zombies ', 'both Obama and Trump '];
let insertY = ['can jump directly into ','are terrified of ', 'don\'t get along well with ', 'sing constantly at ', 'explode when mixed with '];
let insertZ = ['spiders?','monsters?','life-sized chicken nuggets?', 'really big rocks?', 'socks?', 'squirrels?', 'camouflaged leprechauns?'];


// Array to structure the other arrays
let inserts = [storyText, insertX, insertY, insertZ];



// Function that will take random array parts
function randomValueFromArray(array){
  let random = Math.floor(Math.random() * array.length);
  return array[random];
}


// Function that puts all the pieces of the story together
function getRandomQuote(sentenceParts) {
  let randomQuote = '';
  for (let parts of sentenceParts) {
    randomQuote += randomValueFromArray(parts);
  } 
  return randomQuote;
}

// Function that creates a new story and allows for swtiching between US and FR
function getQuote() {
  let newStory = getRandomQuote(inserts);


  // custom name field
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }


  // Section of switching things into the French version 
  if(document.getElementById("fr").checked) {
    const baguette =  'baguettes ';
    const bidet = 'bidets ';
    const frenchies = 'both Napolean and Macron ';
    const british = 'Brits ';
    newStory = newStory.replace('dogs ',baguette);
    newStory = newStory.replace('toilets ',bidet);
    newStory = newStory.replace('both Obama and Trump ',frenchies);
    newStory = newStory.replace('Italians ',british);
  }
  return newStory;
}

// Event listener that adds a new random quote if you want more than one
// (the limit is set to 5 in index.html)
generate.addEventListener('click', () => {
  story.style.visibility = 'visible';
  story.innerHTML = "";
  for(let i = 0; i < quoteNumber.value; i++){
    story.innerHTML += "<p>" + getQuote() + "</p>";
  }
});


// close tab 
document.getElementById("close-window").addEventListener("click", function(){ 
  window.close();
});