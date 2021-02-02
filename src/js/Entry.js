export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.getWordCount = function() {
  return (
    ((!undefined && this.title).trim() 
    + ' ' + 
    (!undefined && this.body).trim()
    ).split(' ').filter(arr => arr !== '').length
  );
};
Entry.prototype.getVowelCount = function() {
  let count = 0;
  let story = this.body.split('');
  for (let i = 0; i < story.length; i++){
    /[aeiou]/.test(story[i]) && count++;
  }
  return count;
};
Entry.prototype.getConstCount = function() {
  let count = 0;
  let story = (this.title + this.body).split('');
  for (let i = 0; i < story.length; i++){
    /[^aeiou ]/.test(story[i]) && count++;
  }
  return count;
};
Entry.prototype.getTeaser = function() {
  let teaseArray = this.body.split(' ');
  let newArray = [];
  for (let i=0; i < teaseArray.length; i++) {
    i <= 7 && newArray.push(teaseArray[i]);
  }
  return teaseArray.join(' ');
};