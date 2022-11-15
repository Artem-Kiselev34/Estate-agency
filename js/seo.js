
let btns = document.querySelectorAll(".btn");
    for(let j = 0; j < btns.length; j++) {
        btns[j].addEventListener('click', function() {
            let i = j;
            return function () {
              if(i == [0]) {			
					let btnText = document.querySelector("#cities");
					if (btnText.innerHTML === "Показать больше городов") {
					  btnText.innerHTML = "Скрыть";
					 
					} else {
					  btnText.innerHTML = "Показать больше городов";
					}
			  }
			  if(i == [1]) {			
				let btnText = document.querySelector("#regions");
				     if (btnText.innerHTML === "Показать больше регионов") {
				       btnText.innerHTML = "Скрыть";
				     } else {
				       btnText.innerHTML = "Показать больше регионов";
				     }
		      }
            };
        } () );
    }

document.querySelector('#regions').addEventListener('click', function() {
    document.querySelector('#open2').classList.toggle('visible');
})

document.querySelector('#cities').addEventListener('click', function() {
    document.querySelector('#open1').classList.toggle('visible');
}) 