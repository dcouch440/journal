import '../css/styles.css';


function Entry(title, body) {
  this.title = title;
  this.body = body;
}


document.ready(function() {
  let title;
  let body;
  let story = new Entry(title, body);

  story;
});
