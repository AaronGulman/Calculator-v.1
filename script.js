let display = document.querySelector('[name="display"]');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');
let erase = document.querySelector('#erase'); 

erase.addEventListener('click', function(){
	display.value = display.value.toString().slice(0,-1);
})

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    let value = e.target.value;
    display.value += value;
  });
});

equal.addEventListener('click', function (e) {
  try {
    let expression = display.value.trim();

    if (expression === '') {
      display.value = '';
    } else {
      // Sanitize the expression to allow only mathematical operators and digits
      let sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');

      let answer = eval(sanitizedExpression);

      // Check if the result is a valid number
      if (!isNaN(answer) && typeof answer !== 'undefined') {
        display.value = answer;
      } else {
        display.value = 'Error';
      }
    }
  } catch (error) {
    console.error('Evaluation Error:', error.message);
    alert('Evaluation Error: ' + error.message);
    display.value = 'Error';
  }
});

clear.addEventListener('click', function () {
  display.value = '';
});

