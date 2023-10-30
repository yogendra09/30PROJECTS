

 var inpt = document.querySelector("#inpt");
 var btn = document.querySelector("#btn")
 var img = document.querySelector("#img")

  btn.addEventListener("click",async function(){
    var ans = await fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpt.value}`);
  
    img.setAttribute("src",ans.url)

  })