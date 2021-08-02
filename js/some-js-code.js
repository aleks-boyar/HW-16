// <!-- 1. Напишите код, который будет выводить alert с надписью Привет! при нажатии на кнопку. -->
// const elem1 = document.getElementById('elem1');
// elem1.onclick = function (){
//     alert('Привет!');

// }
// 2. Напишите код, который будет менять текст в инпуте при нажатии на кнопку (изначально в инпуте уже должно быть задан текст).
// const elem2 = document.getElementById('elem2');


// elem2.onclick = function (event) {
//     let defaultValue = '--------------2---------';

//     if(event.target.innerHTML === defaultValue) {
//         event.target.innerHTML = 'Магия';
//         event.target.style.backgroundColor = 'green';
//         return;
//     } 

//     event.target.innerHTML = defaultValue;
//     event.target.style.backgroundColor = 'pink';
//    }

   // 3. Напишите код, который будет выводить alert с содержимым инпута (изначально в инпуте уже должно быть задан текст).
//    alert(elem3.outerHTML);
// const elem3 = document.getElementById('elem3');
// elem3.onclick = function(event){
//     console.log(event.target.value);
// }

   // 4. Напишите код, который будет выводить alert  с содержимым инпута, возведенным в квадрат (для этого вам нужно создать инпут, в который пользователь будет вводить число).
// const elem4 = document.getElementById('elem4');
// elem4.onkeyup = function(e) {
//     let val = +e.target.value;
//     if(!isNaN(val)){
// console.log(e.target.value**2); 
//     }
  
   

// }


// 5. Вам необходимо создать два инпута с заданными значениями и кнопку, при нажатии на которую будет осуществляться обмен содержимым между двумя инпутами (значение первого инпута должно записаться во второй, а значение второго — в первый).
// const elem5 = document.getElementById('elem5');

elem5.onclick = function (event) {
   let inp1 = document.getElementById('elem11');
   let inp2 = document.getElementById('elem22');
   console.log(inp1,inp2);
   let val1 = inp1.value;
   let val2 = inp2.value;
   inp1.value = val2;
   inp2.value = val1;
}

// 6. Напишите код, который будет при нажатии на кнопку менять текст в ней.

// 7. Напишите код, который будет при нажатии на кнопку менять цвет текста в инпуте (изначально в инпуте уже должно быть задан текст).
// const elem6 = document.getElementById('elem6');

// elem6.onclick = function (event) {

//         event.target.style.color = 'red';


// }
