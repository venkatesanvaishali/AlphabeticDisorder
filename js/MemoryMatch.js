//When hitting enter key on UserName window
$(document).on('keypress', function(e){
    if($('#nameModal').hasClass('show')  && (e.keyCode === 13)){
        e.preventDefault()
        $('#ProfileSubmit').trigger('click')
    }
})

//To bring cursor to username once modal load
$('#nameModal').on('shown.bs.modal', function(){
    $('#UserName').focus()
})


//check for userName and move to play area
$('#ProfileSubmit').on('click', () => {
    let userName = $('#UserName').val()
    if(userName == undefined || userName == ''){
        $('.error').show()
        return
    }
    location.href='playArea.html'
    storeCurrentPlayer(userName)
})

//Remove showing error if user start typing again
$('#UserName').on('click', () => {
    $('.error').hide()
})




