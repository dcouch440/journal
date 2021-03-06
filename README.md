# {Project Name}
#### *Co-Created By: David Couch*
#### *Co-Created By:*
#### **

<!-- Check list
- Project Name
- Author
- Brief Description
- Description
- Specs
- Link in gh-pages
- Project repo
- git clone repo link
- date
 -->

* * *

## Description  
This is an app to take two inputs from a user and stores them in an object using js constructor's.

* * *
## Specs
```js
  Describe: Entry()
  Test: 'It will create an object from two user inputs on submit'
  Expect: new Entry('The Dog Walk', 'One day the dog ran...').toEqual({title: 'The Dog Walk', body: 'One day the dog ran...'})

  Describe: Entry.prototype.getWordCount()
  Test: 'It will convert our body string into a value that shows the count of words'
  Expect: story.getWordCount().toEqual(4)

  Describe: Entry.prototype.getVowelCount()
  Test: 'It will return the number of vowels contained within an entry'
  Expect: story.getVowelCount().toEqual(7)

  Describe: Entry.prototype.getConsCount()
  Test: 'It will return the number of consonants within an entry'
  Expect: story.getConsCount().toEqual(8)

  Describe: Entry.prototype.getTeaser()
  Test: 'It will return the first sentence of the body of an entry'
  Expect: story.getTeaser().toEqual('One day the dog ran...')

  Test: 'It will return only the first 8 words of the first sentence if the sentence is longer than 8 words'
  Expect: longerStory.getTeaser().toEqual('One day the dog ran all the way')
```

* * *

## Technologies used
* HTML
* CSS
* Git and Github
* JavaScript
* JQuery

* * *


## Installation : 
### Want to see this webpage now?
###### See this web page in action on [Github Pages]({repo})

* Go to ( {project repo} ).

*  Navigate to the code button on the github website.\
![Code button](/img/README/code.PNG)

* Click on the code button to open the menu.\
![Github Repo Example](/img/README/HTTPS.PNG)

- Copy the HTTPS code by clicking the clipboard next to the link.

- Within your Bash terminal navigate to your desired location by using cd fallowed by your desired directory.
```bash
 cd Desktop
``` 

- Once you have chosen your desired directory use the command.
```bash 
git clone {git repo}
```

<div 
  style="
    background-color: #d1ecf1; 
    color: grey; padding: 6px; 
    font-size: 9px; 
    border-radius: 5px; 
    border: 1px solid #d4ecf1; 
    margin-bottom: 12px"
> 
  <span 
    style="
      font-size: 12px; 
      font-weight: 600; 
      color: #0c5460;"
  >
    ⓘ
  </span>
  <span 
    style="
      font-size: 12px; 
      font-weight: 900; 
      color: #0c5460;
      margin-bottom: 24px"
  >
    Note : 
  </span> 
  If you have any problems make sure your HTTPS code is correct! The example above might not be the most recent HTTPS code!
</div>


* Then after the process is completed use the command.

``` bash
code .
```


## Addition comments:
* Created on x/xx/21


* * *

## License:
> *&copy; David Couch, 2021*

Licensed under [MIT license](https://mit-license.org/)

* * *

## Contact Information
_David Couch: [Email](dcouch440@gmail.com)_