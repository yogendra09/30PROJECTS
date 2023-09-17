const api_url = `https://api.quotable.io/random`;
const quote = document.querySelector("#quote")
const author = document.querySelector("#author")
  

async function getQuote(url){
   const response = await fetch(url);
   var data = await response.json()
   console.log(data)
   quote.innerHTML = data.content
   author.innerHTML = data.author
}
getQuote(api_url)


function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTM + "-----by" + author.innerHTML ,"Tweet Window","width:600,height:300");
}