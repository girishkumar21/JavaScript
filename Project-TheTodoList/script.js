let circles = document.querySelectorAll('.circle');
const goalContainer = document.querySelectorAll('.goal_container');
let inputField = document.querySelectorAll('.goal');
const errorMessage = document.querySelector('.error_label');
const progressVal = document.querySelector('.progress_val');
const progressSpan = document.querySelector('.progress');
const message = document.querySelector('.message');
const addTask = document.querySelector('.add');
const container = document.querySelector('.taskContainer');
const task = document.querySelector('.goal_container')

let count = 0;
let taskNumber = 3;

{/* <div class="circle"><img class="tick" src="images/Tick.svg" alt="tick"></div>
<input type="text" class="goal" placeholder="Add new goal..."> */}

addTask.addEventListener('click', ()=>{

    const newTask = document.createElement('div');
    newTask.classList.add('goal_container')

    const newCircle = document.createElement('div');
    newCircle.classList.add('circle');

    const newImage = document.createElement('img');
    newImage.classList.add('tick');
    newImage.setAttribute('src','images/Tick.svg');
    newImage.setAttribute('alt', 'tick')

    newCircle.appendChild(newImage);

    const newInput = document.createElement('input');
    newInput.classList.add('goal')
    newInput.setAttribute('type','text');
    newInput.setAttribute('placeholder','Add new goal...');

    newTask.append(newCircle,newInput);
    taskNumber++;
    container.append(newTask);
    circles = document.querySelectorAll('.circle');
    inputField = document.querySelectorAll('.goal');
})


// // All the input fields must be filled
for(const circle of circles){
    
    circle.addEventListener('click',()=>{
        let filled = false;
        filled = [...inputField].every((input)=>input.value);
        console.log(filled);
        if(filled){
            circle.parentElement.classList.toggle('completed');
            message.innerHTML = '“Keep Going, You’re making great progress!”'
            if(circle.parentElement.classList.contains('completed')){
                count++;
            }
            else{
                count--;
            }
            
            if(count <= taskNumber){
                const progress = (count/taskNumber)*100;
                progressVal.style.width = `${progress}%`
                progressSpan.innerHTML = `${count}/${taskNumber} complete` ;
            }
            if(count == 0){
                progressSpan.style.visibility = 'hidden';
                message.innerHTML = '“Move one step ahead, today!”';
            }
            else{
                progressSpan.style.visibility = 'visible';
            }
            if(!(progressSpan.parentElement.classList.contains('showProgress'))){
                progressSpan.parentElement.classList.add('showProgress');
            }
        }
        else{
            errorMessage.parentElement.classList.add('showError');
            errorMessage.innerHTML = `Please set all the ${taskNumber} goals!`;
        }
    })
}

inputField.forEach((input)=>{
    input.addEventListener('focus',()=>{
        errorMessage.parentElement.classList.remove('showError');
    })
})


message.innerHTML = '“Move one step ahead, today!”'







// // For specific Input fields

// goalContainer.forEach((goals)=>{
//     const circle = goals.children[0];
//     const input = goals.children[1];

//     let inputValue = null;
    
//     input.addEventListener('input',(e)=>{
//         inputValue=e.target.value;
//         if(inputValue!=null){
//             circle.addEventListener('click',(e)=>{
//                 e.stopPropagation();
//                 circle.parentElement.classList.toggle('completed');
//             })
//         }
        
//     })  
    
// })