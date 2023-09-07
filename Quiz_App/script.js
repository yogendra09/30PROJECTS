

 
 const question = [
    {
    question:"skssjkljfsskdljksdljfd;a",
    answers:[
        {text:"sharl",correct:true},
        {text:"yes",correct:false},
        {text:"sharl",correct:false},
        {text:"sharl",correct:false},
    ]
 },
    {
    question:"skssjkljfsskdljksdljfd;a",
    answers:[
        {text:"sharl",correct:false},
        {text:"yes",correct:true},
        {text:"sharl",correct:false},
        {text:"sharl",correct:false},
    ]
 },
    {
    question:"skssjkljfsskdljksdljfd;a",
    answers:[
        {text:"sharl",correct:false},
        {text:"yes",correct:false},
        {text:"sharl",correct:true},
        {text:"sharl",correct:false},
    ]
 },
    {
    question:"skssjkljfsskdljksdljfd;a",
    answers:[
        {text:"sharl",correct:false},
        {text:"yes",correct:false},
        {text:"sharl",correct:false},
        {text:"sharl",correct:true},
    ]
 },
    {
    question:"skssjkljfsskdljksdljfd;a",
    answers:[
        {text:"sharl",correct:true},
        {text:"yes",correct:false},
        {text:"sharl",correct:false},
        {text:"sharl",correct:false},
    ]
 }
]

let currentQuestionIndex = 0;
let score = 0;

// $("#question")



function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    $("#next-btn").html("Next")
    showQuestion()
}
function showQuestion (){
    // resetState()
 let currentQuestion = question[currentQuestionIndex];
 let questionNo = currentQuestionIndex + 1;
 $("#question").html(questionNo + ". " + currentQuestion.question)

   currentQuestion.answers.forEach(function(ans){
    console.log(ans.text);
     const button = document.createElement("button");
     button.innerText= ans.text
     button.classList.add('btn');
     $("#ansbtn").append(button);
     if(answers.correct){
        button.dataset
     }
     button.addEventListener('click',function(){

     })
    // document.querySelector("#ansbtn").appendChild(button)
   })

}


function resetState(){
    $("#next-btn").css("display","block");
    while($("#ansbtn").first()) {
        console.log("first")
        $("#ansbtn").remove($("#ansbtn").first());
    }

}




startQuiz()