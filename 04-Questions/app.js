// Using selector inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
//    console.log(question)

    const btn = question.querySelector(".question-btn");
// console.log(btn)

    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        
        question.classList.toggle("show-text")
    })
})