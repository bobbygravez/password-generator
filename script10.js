const characters = ["A","B","C","D","E","F","G","H","I","j","K","L","M",
					"N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
					"a","b","c","d","e","f","g","h","i","j","k","l","m",
					"n","o","p","q","r","s","t","u","v","w","x","y","z",
					"0","1","2","3","4","5","6","7","8","9","~","`","@",
					"#","$","%","^","&","*","(",")","_","-","=","+","{",
					"[","}","]","/","?",">","<","|",";",":"]

const displayOne = document.querySelector("#input-field1")
const displayTwo = document.querySelector("#input-field2")
const generateBtn = document.querySelector("#Generate-btn")

generateBtn.addEventListener("click", function () {
	for (let i = 0; i < 15; i++) {
		let generateRandomNumber1 = Math.floor(Math.random() * 89)
		let generateRandomNumber2 = Math.floor(Math.random() * 89)

				displayOne.value +=  characters[generateRandomNumber1] 
				displayTwo.value +=  characters[generateRandomNumber2] 
			}	
})				
 
