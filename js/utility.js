
let storeCurrentPlayer = function(name){
    localStorage.setItem('currentPlayer', name)
}

let getCurrentPlayer = function(){
    return localStorage.getItem('currentPlayer')
}

let setTopScore = function(name, value){
    localStorage.setItem(name, value)
}

let getTopScore = function(name){
    return localStorage.getItem(name)
}

