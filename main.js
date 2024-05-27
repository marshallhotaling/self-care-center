var reciveButton = document.querySelector(".messageButton")
var radioAfm = document.querySelector(".radioButtonA")
var radioMan = document.querySelector(".radioButtonB")
var bell = document.querySelector(".bottomItem")
var showSaved = document.querySelector(".showSavedButton")
var saveThis = document.querySelector(".saveThisButton")
var savedView = document.querySelector(".secondItem")
var veiwFavortite = document.querySelector(".allSaved")
var backHomeButton = document.querySelector(".bTHome")
var iDontLike = document.querySelector(".iDL")

var isAffirmation = true
var savedQuotes = []
var randomItem = 0

radioAfm.addEventListener('click', () => {
    radioAfm.checked = true
    radioMan.checked = false
    isAffirmation = true
})

radioMan.addEventListener('click', () => {
    radioAfm.checked = false
    radioMan.checked= true
    isAffirmation = false
})

reciveButton.addEventListener('click', () => {
    saveThis.classList.remove("hidden")
    iDontLike.classList.remove("hidden")
  if (isAffirmation === true){
      if(affirmation.length === 0){
          alert("you will be seeing repeats")
          affirmation = affirmationUsed
          affirmationUsed = []
      }
      randomItem = Math.floor(Math.random() * affirmation.length)
      bell.innerHTML = `<label class="finalLabel">${affirmation[randomItem]}</label>`
      affirmationUsed.push(affirmation[randomItem])
      affirmation.splice(affirmation[randomItem],1)
  }else{
      if(mantra.length === 0){
          alert("you will be seeing repeats")
          mantra = mantraUsed
          mantraUsed = []
      }
      randomItem = Math.floor(Math.random() * mantra.length)
      bell.innerHTML = `<label class="finalLabel">${mantra[randomItem]}</label>`
      mantraUsed.push(mantra[randomItem])
      mantra.splice(mantra[randomItem],1)
  }

})

saveThis.addEventListener('click', () => {
    showSaved.classList.remove("hidden")

    if (isAffirmation === true){
        savedQuotes.push(affirmation[randomItem])

    }else{
        savedQuotes.push(mantra[randomItem])
    }

})

showSaved.addEventListener('click', () => {
    savedView.classList.remove("hidden")
    drawUi()
})

backHomeButton.addEventListener('click', () => {
    savedView.classList.add("hidden")
})

iDontLike.addEventListener('click', () => {
    iDontLike.classList.add("hidden")
    if (isAffirmation === true){
        affirmationUsed.splice(affirmationUsed.length - 1, 1)
        bell.innerHTML = `<label class="finalLabel">affirmation has been removed</label>`
    }else{
        mantraUsed.splice(mantraUsed.length - 1,1)
        bell.innerHTML = `<label class="finalLabel">mantra has been removed</label>`
    }
})

function deleteItem(i) {
    savedQuotes.splice(i,1)
    drawUi()
}

function start() {
    radioAfm.checked = true
    radioMan.checked = false
    isAffirmation = true
}


function drawUi (){
    veiwFavortite.innerHTML = ""
    for (let i = 0; i < savedQuotes.length; ++ i  ){
        veiwFavortite.innerHTML += `<label class="quotes">${savedQuotes[i]} <button class="remove" onclick="deleteItem(${i})">remove</button></label>`
    }
}


var affirmationUsed = []
var affirmation =["I am successful.",
    "I am confident.",
    "I am powerful.",
    "I am strong.",
    "I am getting better and better every day.",
    "All I need is within me right now.",
    "I wake up motivated.",
    "I am an unstoppable force of nature.",
    "I am a living, breathing example of motivation.",
    "I am living with abundance.",
    "I am having a positive and inspiring impact on the people I come into contact with.",
    "I am inspiring people through my work.",
    "I’m rising above the thoughts that are trying to make me angry or afraid.",
    "Today is a phenomenal day.",
    "I am filled with focus.",
    "I am not pushed by my problems; I am led by my dreams.",
    "I am grateful for everything I have in my life.",
    "I am independent and self-sufficient.",
    "I can be whatever I want to be.",
    "I am not defined my by past; I am driven by my future.",
    "I use obstacles to motivate me to learn and grow.",
    "Today will be a productive day.",
    "I am intelligent and focused.",
    "I feel more grateful each day.",
    "I am getting healthier every day.",
    "Each and every day, I am getting closer to achieving my goals.",
    "I am constantly growing and evolving into a better person.",
    "I’m freeing myself from all destructive doubt and fear.",
    "I accept myself for who I am and create peace, power and confidence of mind and of heart.",
    "I am going to forgive myself and free myself. ",
    "I deserve to forgive and be forgiven.",
    "I am healing and strengthening every day.",
    "I must remember the incredible power I possess within me to achieve anything I desire.",
    "My past might be ugly, but I am still beautiful.",
    "I have made mistakes, but I will not let them define me.",
    "My soul radiates from the inside and warms the souls of others.",
    "Note to self: I am going to make you so proud.",
    "I finish what matters and let go of what does not.",
    "My life has meaning. What I do has meaning.",
    "My actions are meaningful and inspiring.",
    "What I have done today was the best I was able to do today. And for that, I am thankful.",
    "Happiness is a choice, and today I choose to be happy."]


var mantraUsed=[]
var mantra = ["All I Need Is Within Me.",
    "All Is Well.",
    "All You Need Is Love.",
    "Always In My Heart.",
    "Anything Is Possible.",
    "Be Bright, Be Brave, Be Bold.",
    "Be Fearless, Be Resilient.",
    "Be Here Now.",
    "Be Present.",
    "Be The Change.",
    "Be The Light.",
    "Be True. Be You. Be Kind.",
    "Be you, love you. All ways, always.",
    "Bloom Where You Are Planted.",
    "Born Ready.",
    "Carpe Diem.",
    "Choose Joy.",
    "Choose Love.",
    "Do It Anyway.",
    "Do What Makes You Happy.",
    "Do What You Love, Love What You Do.",
    "Dream Believe Achieve.",
    "Dream Without Fear.",
    "Enjoy the Journey.",
    "Enjoy The Little Things.",
    "Everything Is Possible.",
    "Everything Will Be Alright.",
    "Find Your True North.",
    "Follow Your Bliss.",
    "Follow Your Heart.",
    "Grit Grace Gratitude.",
    "Have Courage and Be Kind.",
    "Hope Is Within Me.",
    "I Am Becoming.",
    "I Am Enough.",
    "I Am Grateful.",
    "I Am Powerful.",
    "I Am Protected.",
    "I Am Resilient.",
    "I Am Rising.",
    "I Am Strong.",]


start()