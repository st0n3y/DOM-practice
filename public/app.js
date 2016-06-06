window.onload = function(){
  main();
}


quoteArray = [
  {text: "'Visual Basic is the way forward; I don't know why we are doing JavaScript.'", author: " - Jay Chetty"},
  {text: "'The only CSS you need to know is background-color: tomato.'", author: " - Rick"},
  {text: "'I used the jQuery diet plugin and lost 10kg in a week.'", author: " - Keith"},
  {text: "'Scaffolding is nothing but a fiery hell.'", author: " - Valerie"}
]


function main() {
  // var qotd = document.getElementById( "quote-of-the-day" );
  // console.log( qotd.children[1].innerText );

  var buttons = document.getElementsByTagName( "button" );
  console.log( buttons[0] );

  // var quotes = document.getElementsByClassName( "quote" );
  // var lastQuote = quotes[quotes.length-1];
  // console.log( lastQuote.innerText );

  // qotd.style.visibility = 'hidden';

  // var articles = document.getElementsByTagName( "article" );

  // for ( var i = 0; i < articles.length; i++ ) {
  //   articles[i].style.backgroundColor = "wheat";
  // }

  // createQuote();

  var quotes = quoteArray;
  for( var quote of quotes ){
    postQuote( quote );
  }

  var button = document.getElementById( "add-button" );
  button.onclick = handleInputClick;

  var form = document.getElementById( "quote-form" );
  form.onsubmit = handleSubmit;
}


function postQuote( quote ) {
  var blockQuote = document.createElement( "blockquote" );
  blockQuote.innerText = quote.text;
  var cite = document.createElement( "cite" );
  cite.innerText = quote.author;
  var article = document.getElementById( "quote" );
  article.appendChild( blockQuote );
  blockQuote.appendChild( cite );
}

var handleSubmit = function( event ) {
  event.preventDefault();
  handleInputClick();
}

var handleInputClick = function() {
  
  var quoteInput = document.getElementById( "quote-input" );
  var authorInput = document.getElementById( "author-input" );
  var quote = {
    text: quoteInput.value,
    author: authorInput.value
  }
  postQuote( quote );
}


// function createQuote(){
  
//   var quoteArticle = document.createElement( "article" );
//   quoteArticle.classList.add( "quote" );

//   var blockQuote = document.createElement( "blockquote" );
//   blockQuote.innerText = "Open the pod bay doors, HAL. ";

//   var cite = document.createElement( "cite" );
//   cite.innerText = "Dave";

//   blockQuote.appendChild( cite );

//   quoteArticle.appendChild( blockQuote );

//   var quotes = document.querySelector( "#quotes" );
//   quotes.appendChild( quoteArticle );
// }