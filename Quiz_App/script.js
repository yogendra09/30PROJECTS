

 
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

     if(ans.correct){
        button.dataset.correct = ans.correct
     }
     button.addEventListener('click',selectAnswer)
    
   })

}


// function resetState(){
//     $("#next-btn").css("display","block");
//     while($("#ansbtn").first()) {
//         console.log("first")
//         $("#ansbtn").remove($("#ansbtn").first());
//     }

// }


function selectAnswer(e){
         const selectedBtn= e.target;
         const isCorrect = selectedBtn.dataset.correct === "true"
          if(isCorrect){
            selectedBtn.classList.add('correct')
            score++;
          }else{
            selectedBtn.classList.add("incorrect")
          }
        Array.from(document.querySelector("#ansbtn").children).forEach(function(button){
              
            if(button.dataset.correct === 'true'){
                button.classList.add("correct")
            }
            button.disabled = true;
        })

        $("#next-btn").css('display','block')
}

function showScore(){
    // resetState();
    $("#question").html(`you scored ${score} out of ${question.length}`)
    $("#next-btn").text("play again")

$("#next-btn").css('display','block');
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();
    }else{
        showScore();
    }
}


$("#next-btn").click((e)=>{
    if(currentQuestionIndex< question.length){
        handleNextButton()

    }else{
        startQuiz();
    }
})


startQuiz()