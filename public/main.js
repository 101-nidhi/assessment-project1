// Page Elements

const engadget = document.getElementById('engadget');
const recode = document.getElementById('recode');
const nextWeb = document.getElementById('nextWeb');
const ign = document.getElementById('ignNews');
const main = document.getElementsByTagName('main')[0];

// News API Data

const apiKey = 'e1bd2c8a7f5c40bfa8b9c773feac20a9';
const engadgetUrl = 'https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=';
const recodeUrl = 'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=';
const nextWebUrl = 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=';
const ignUrl = 'https://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=';

// Request News Function

async function getNews(url) {
  let response = await fetch(url + apiKey);
  let jsonResponse = await response.json();
  let articlesArray = jsonResponse.articles.slice(0,5);
<<<<<<< HEAD
  //console.log(jsonResponse);
  return articlesArray;
}

// Render Function

=======
  console.log(jsonResponse);
   return articlesArray;
}
// Render Function
>>>>>>> First Version
function renderNews(articles) {
  articles.map((article, index) => {
    let articleRow =
      '<div class="articlerow">' +
      ' <div class="article">' +
      '   <h2 class="title">' + article.title + '</h2>' +
<<<<<<< HEAD
      '   <h3>By ' + article.author +'</h3>' +
      '   <p> ' + article.description + '</p>' +
      '   <a href="' + article.url + '" target="_blank" class="readmore">Read More</a>' +
      ' </div>' +
      ' <div class="share">' +
      '   <img class="storyimage" src="' + article.urlToImage + '" />' +
      '   <a href="https://twitter.com/jmercier76" target="_blank"><button type="button" class="tweet" id="tweet ' + index + '">' +
      '   <i class="fa fa-twitter" aria-hidden="true"></i>Tweet</button></a>' +
=======
      '   <h3>By ' + article.author+'</h3>' +
      '   <p> ' +article.description+ '</p>' +
      '   <a href="'+article.url+'" target="_blank" class="readmore">Read More</a>' +
      ' </div>'+
      ' <div class="share">'+
      '   <img class="storyimage" src="' + article.urlToImage + '" />'+
     // '   <a href="https://twitter.com/jmercier76" target="_blank"><button type="button" class="tweet" id="tweet '+ index + '">'+
     // '   <i class="fa fa-twitter"aria-hidden="true"></i>Tweet</button></a>' +
>>>>>>> First Version
      ' </div>' +
      '</div>';

    main.innerHTML += articleRow;
  });
  return articles;
}
<<<<<<< HEAD

// Post Tweet Function

function sendTweets(newsObjects) {
  let tweetButtons = document.getElementsByClassName('tweet');
  for (let i = 0; i < tweetButtons.length; i++) {
    tweetButtons[i].addEventListener('click', function() {
      Twitter.postStatus(newsObjects[i].url);
      tweetButtons[i].innerHTML = "Tweeted";
    }, false);
  }
}

=======
>>>>>>> First Version
// Button Event Listeners

engadget.addEventListener('click', function() {
  main.innerHTML = ' ';
<<<<<<< HEAD
  getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
=======
  getNews(engadgetUrl).then(articlesArray => renderNews(articlesArray));
>>>>>>> First Version
}, false);


recode.addEventListener('click', function() {
  main.innerHTML = ' ';
<<<<<<< HEAD
  getNews(recodeUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
=======
  getNews(recodeUrl).then(articlesArray => renderNews(articlesArray));
>>>>>>> First Version
}, false);

nextWeb.addEventListener('click', function() {
  main.innerHTML = ' ';
<<<<<<< HEAD
  getNews(nextWebUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
=======
  getNews(nextWebUrl).then(articlesArray => renderNews(articlesArray));
>>>>>>> First Version
}, false);

ign.addEventListener('click', function() {
  main.innerHTML = ' ';
<<<<<<< HEAD
  getNews(ignUrl).then(articlesArray => renderNews(articlesArray)).then(articles => sendTweets(articles));
=======
  getNews(ignUrl).then(articlesArray => renderNews(articlesArray));
>>>>>>> First Version
}, false);
function f1()
{
  window.open("index1.html");
}

