
$(document).ready(function(){
  getQuoteSetText();
	$("#generate").on("click",function(){
    getQuoteSetText();
	});
});

function getQuoteSetText(){
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (data){
	console.log(data["quoteText"]);
	console.log(data["quoteAuthor"]);
    $("#quote_text").text(data["quoteText"]);
    $("#quote_author").text(data["quoteAuthor"]);
  });	
}