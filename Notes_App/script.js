 



 function showNotes(){
    $('.notes-container').html(localStorage.getItem('notes'));
 }
showNotes()

function updateStorage(){
    localStorage.setItem("notes",$('.notes-container').html())
}



$('.btn').click(function(){
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'inpt-box';
    inputBox.setAttribute('contenteditable',"true");
    img.src = '';
    $('.notes-container').append(inputBox)
    inputBox.appendChild(img);
})

$('.notes-container').click(function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage()
    }else if(e.target.tagName === 'P'){
        var notes = document.querySelectorAll(".inpt-box");

        notes.forEach(function(nt){
            nt.onkeyup = function(){
                updateStorage();
            }

        })
    }
})


$('.inpt-box')