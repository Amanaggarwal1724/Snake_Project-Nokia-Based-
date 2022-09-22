// $("button").click(function(){
// 	var fired_button = $(this).val();
// 	alert(fired_button);
// });

const inputE=document.querySelector('input');
const buttonE=document.querySelectorAll('button')

for(let button of buttonE)
{
	button.addEventListener('click',function(e){
		let text=e.target.innerText;
		if(text==='C'){
			inputE.value=''
		}
		else if(text === '='){
			try
			{
				inputE.value=eval(inputE.value)
			}

			catch{
				console.log('Invalid')
			}
		}
		else if(text==='<'){
			inputE.value=inputE.value.slice(0,-1);
		}
		else{
			inputE.value+=text
		}
	})
}





// document.querySelectorAll('button').forEach(button =>{
// 	button.addEventListener('click',()=>{
// 		const used_button = button.value;
// 		console.log(used_button);
// 	})
// })

