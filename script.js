//your JS code here. If required.
let input1 = document.querySelector('#singleDigitInput');
input1.addEventListener('keypress',event => {
	 if (event.key.length > 1) {
    event.preventDefault();
		 console.log('hiii');
  }
})
