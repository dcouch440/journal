import {Entry} from './Entry.js';
import '../css/styles.css';


const storyValues = (thisArg, currentCase) => {
  const caseObj = {
    'word': () => thisArg.getWordCount(),
    'vowel': () => thisArg.getVowelCount(),
    'consonant': () => thisArg.getConstCount(),
    'teaser': () => thisArg.getTeaser(),
    'default' : () => null
  };
  return (caseObj[currentCase] || caseObj['default'])();
};


document.addEventListener('DOMContentLoaded', () => {
  const buttonContainer = document.getElementById('button-container');
  const output = document.getElementById('output');
  
  buttonContainer.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target.id);
    const title = document.getElementById('title').value;
    const story = document.getElementById('story-input').value;
    const entry = new Entry(title, story);
    const eventTarget = event.target.id;
    output.innerHTML = storyValues(entry, eventTarget);
  });
});
