//TODO Get value from player
//=====================================Load Animals===================================
const to_remember_count = 4
let randomAnimals = []
function showAnimals(){
    randomAnimals = getRandomMammal(to_remember_count)

    $('#showAnimals').empty()
    for(let animal of randomAnimals){
        let button = document.createElement('button')
        button.dataset.animal = animal
        button.setAttribute('class', 'chooseAnimal btn btn-primary btn-lg')
        button.innerHTML = animal
        $('#showAnimals').append(button)
    }
}
showAnimals()

let finalResult = 0
let userChosenList = []

//onclick event on dynamically added element is not working. so added on click on static element showAnimals
//and choose the element 'chooseAnimal' within it
$('#showAnimals').on('click', '.chooseAnimal', function() {
    if($(this).hasClass('added')){
        $(this).removeClass('added')
        userChosenList.splice(userChosenList.indexOf($(this).data('animal')), 1)
        $(this).html($(this).data('animal'))
    }
    else{
        $(this).addClass('added')
        userChosenList.push($(this).data('animal'))
        $(this).html('&#10004;'+$(this).data('animal'))
    }
})

//Calculate result
$('#loadNextGame').click(function(){
    // console.log('Ques : ',  randomAnimals.sort().join(' '))
    // console.log('ANs: ', userChosenList.join(' '))
    if (userChosenList.join(' ') == randomAnimals.sort().join(' '))
        finalResult++
        userChosenList = []
    showAnimals()
})


//=====================================Timer==========================================
const defaultGameDuration = 61000
const gameDuration = 60

let wait = new Promise((resolve, reject) => setTimeout(resolve, defaultGameDuration))
let showTimer = new Promise((resolve, reject) =>{
    let timer = setInterval(changeTime, 1000)
    wait.then(() => {
        clearInterval(timer)
        resolve()
    })
})
   
function changeTime(){
    let timerText = 'You have '
    $('#timer').html(timerText + '<b>' + gameDuration-- + '</b> seconds left')
}


// ======================= Score modal=================================
showTimer.then(() => {
    let resultToShow = `You scored <b>${finalResult}</b> <br/>`
    let currentUserName = getCurrentPlayer()
    let topScore = getTopScore(currentUserName) 
    if((topScore < finalResult) && (finalResult > 0)){
        resultToShow += 'You have top score now. <b>Congratulations!!!</b>'
        setTopScore(currentUserName, finalResult)
        let imageTag = document.createElement('img')
        imageTag.style.width = '470px';
        imageTag.style.height = '300px';
        imageTag.src = '..\\congrats.gif'
        imageTag.alt = 'Congrats Gif'
        $('div.modal-body').append(imageTag)
    }
    
    //Direct descendant
    $('div.modal-body > p').html(resultToShow)
    $('#resultModal').modal('show')
})


