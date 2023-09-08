




const lenght = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';  
const Number = '0123456789'
const Symbol = '@#$%^&*()_+~|}{[]></-=';
const allChars = upperCase + lowerCase + Symbol+Number;

     function randomPasswordGenrator(){
        console.log("clicked");
        let password = "";
        password += upperCase[Math.floor(Math.random()*upperCase.length)]
        password += upperCase[Math.floor(Math.random()*lowerCase.length)]
        password += upperCase[Math.floor(Math.random()*Number.length)]
        password += upperCase[Math.floor(Math.random()*Symbol.length)]


        while(lenght > password.length){
            password += allChars[Math.floor(Math.random()* allChars.length)];
        }
        $("#password").val(password);

       console.log(allChars);
     }

   function copyPassword(){
         document.querySelector('#password').select();
         document.execCommand("copy")
   }