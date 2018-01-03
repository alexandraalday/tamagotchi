console.log('loaded bro')



//game actions

// var hungerTimer = setInterval(() => {
//    		tamagotchi1.cry()
//    		tamagotchi2.cry()
//     }, 6000)
// var yawnTimer = setInterval(() => {
//    		tamagotchi1.yawn()
//    		tamagotchi2.yawn()
//     }, 10000)
// var sickTimer = setInterval(() => {
//    		tamagotchi1.puke()
//    		tamagotchi2.puke()
//     }, 25000)



//puppycat tamagotchi pet
const tamagotchi1 = {
  name: "Puppycat",
  creatureType: "puppycat",
  foodInTummy: 10,
  restedness: 10,
  health: 10,
  cry(){
  	console.log(this.name + ': Waaaaaa!!!')
  	this.foodInTummy--
  	console.log('Food in ' + this.name + "'s tummy is now: " + this.foodInTummy)
  },
  puke(){
   console.log(this.name + ': Bleeeeh :O~~')
   this.health--
   console.log(this.name + "'s Health is now: " + this.health)
  },
  yawn(){
   console.log(this.name + ': Yaaaawwwwn!')
   this.restedness--
   console.log(this.name + "'s Restedness is now: " + this.restedness)
  }, 
  start(){
  	hungerTimer
  	yawnTimer
  	sickTimer
  },
  stop(){
  	clearInterval(hungerTimer)
  	clearInterval(yawnTimer)
	clearInterval(sickTimer)
  }
}

// tamagotchi1.start()

//bee tamagotchi pet
const tamagotchi2 = {
  name: "Bee",
  creatureType: "bee",
  foodInTummy: 6,
  restedness: 8,
  health: 9,
  cry(){
  	console.log(this.name + ': Waaaaaa!!!')
  	this.foodInTummy--
  	console.log('Food in ' + this.name + "'s tummy is now: " + this.foodInTummy)
  },
  puke(){
   console.log(this.name + ': Bleeeeh :O~~')
   this.health--
   console.log(this.name + "'s Health is now: " + this.health)
  },
  yawn(){
   console.log(this.name + ': Yaaaawwwwn!')
   this.restedness--
   console.log(this.name + "'s Restedness is now: " + this.restedness)
  },
  start(){
  	hungerTimer
  	yawnTimer
  	sickTimer
  }, 
  stop(){
  	clearInterval(hungerTimer)
  	clearInterval(yawnTimer)
	clearInterval(sickTimer)
  }
}


//player 
const player = {
	name: 'deckard',
	sayName(){
		console.log('Hi, my name is ' + this.name)
	}, 
	feedTamagotchi(tamagotchi, food){
		tamagotchi.foodInTummy++
		console.log('You fed ' + tamagotchi.name + ' an ' + food + '. Food in their tummy is now: ' + tamagotchi.foodInTummy) 
	}, 
	medicateTamagotchi(tamagotchi, medicine){
		tamagotchi.health++
		console.log('You gave ' + tamagotchi.name + ' some ' + medicine + ". Their Health is now: " + tamagotchi.health)
	},
	knockOutTamagotchi(tamagotchi){
		tamagotchi.restedness++
		console.log(tamagotchi.name + "'s Restedness is now: " + tamagotchi.restedness)
	}
}
// player.sayName()
// player.feedTamagotchi(tamagotchi2, 'apple')
// player.medicateTamagotchi(tamagotchi1, 'cough syrup')
// player.knockOutTamagotchi(tamagotchi2)


document.getElementsByClassName('btn1').onclick = player.feedTamagotchi(tamagotchi1, 'apple')

document.getElementsByClassName('btn2').onclick = player.knockOutTamagotchi(tamagotchi2)

document.getElementsByClassName('btn3').onclick = player.medicateTamagotchi(tamagotchi1, 'cough syrup')







