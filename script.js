(function (){
	let display =document.querySelector('[name = "display"]');
	let buttons =document.querySelectorAll('.btn');
	let clear =document.querySelector('.btn-clear');
	let equal =document.querySelector('.btn-equal');

	buttons.forEach(function (button){
		button.addEventListener('click', function(e) {
			let value = e.target.value;
			display.value += value;
		});
	});

	equal.addEventListener('click', function (e){
	if(display.value === ''){
	display.value = '';
	} else {
		let answer = eval(display.value)
		display.value = answer;
	}
	})

})();


