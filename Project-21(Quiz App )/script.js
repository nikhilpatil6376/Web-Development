const quizContainer=document.getElementById("quiz");
const submitButton=document.getElementById("submit");
const resultsContainer=document.getElementById("results");

const myQuestion=
[
    {
        question:"What is the capital of France?",
        answers:
        {
            a: "London",
            b:"New York",
            c:"Paris",
        },
        correctAnswer:"c",
    },

    {
        question:"What is the largest country in the world?",
        answers:
        {
            a: "India",
            b:"Russia",
            c:"China",
        },
        correctAnswer:"b",
    },

    {
        question:"What is the currency of Japan?",
        answers:
        {
            a: "Yuan",
            b:"Yen",
            c:"Euro",
        },
        correctAnswer:"b",
    },
]

const output=[];  
function buildQuiz()
{          
    myQuestion.forEach((currentQuestion,questionNumber)=>
    {
        const answer=[];
        for(letter in currentQuestion.answers)
        {
            answer.push
            (
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}" />
                </label> ${letter} : ${currentQuestion.answers[letter]}
                ` 
            )
        }
        output.push
        (
            `<div class="questions">${currentQuestion.question}<div>
                <div class="answers">${answer.join(" ")}<div> 
            `
        )
    })
    quizContainer.innerHTML=output.join(" ");
}

function showResult()
{
    const answersContainer=quizContainer.querySelectorAll(".answers");
    const questionsContainer=quizContainer.querySelectorAll(".questions");
    let numCorrect=0;
    myQuestion.forEach((currentQuestion,questionNumber)=>
    {
        const answerContainer=answersContainer[questionNumber];
        const selector=`input[name="question${questionNumber}"]:checked`;
        const userAnswer=(answerContainer.querySelector(selector) || {}).value

        if(userAnswer === currentQuestion.correctAnswer)
        {
            numCorrect++;
            questionsContainer[questionNumber].style.color="white";
            answersContainer[questionNumber].style.color="green";
        }
        else
        {
            questionsContainer[questionNumber].style.color="white";
            answersContainer[questionNumber].style.color="red";
        }
    })
    resultsContainer.innerHTML=`${numCorrect} out of ${myQuestion.length}`;
}
buildQuiz();
submitButton.addEventListener("click",showResult);