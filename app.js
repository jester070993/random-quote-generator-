
 
var newQuote = document.getElementById("newQuote")
var random = document.getElementById("random");
var twitter=document.getElementById("twitter");
var quoteDisplay = document.querySelector("#quoteDisplay");
var firstText = document.querySelector(".firstText");
var byAuthor = document.querySelector("#author")


function getNewQuote(){
  $.ajax({
    url: 'https://api.forismatic.com/api/1.0/',
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
    	method: "getQuote",
    	format: "jsonp",
    	lang: "en"
    },
    success: function (response) {
         var quote = response.quoteText;
          var author = response.quoteAuthor;
          console.log(author);
          console.log(quote);
          quoteDisplay.textContent = quote;
          if (response.quoteAuthor){
            byAuthor.textContent = "- " + author
          }
          else {
            byAuthor.innerHTML = "- Unknown"
          };
       twitter.addEventListener("click", function(){
      window.open("https://twitter.com/intent/tweet?text=" + '"'+ quote + '"' + " " + author +           "&source=webclient")
       });
              }
          });

        };



window.addEventListener("load", function(){
getNewQuote();  
   // $.ajax({
   //   url: 'http://quotes.stormconsultancy.co.uk/random.json',
   //          dataType: 'json',
   //          success: function (response) {
   //              quote = response.quote;
   //            $('h4').text(quote);
   //              if (response.author) {
   //              $('#author').text(response.author);
   //              } else {
   //                  $('#author').text('- unkown');
   //              }
   //          }
   // })
});

newQuote.addEventListener("click", function(){   
   $(firstText).fadeOut("slow");
   $(quoteDisplay).fadeOut("fast")
   $(quoteDisplay).fadeIn("fast", getNewQuote())
  });