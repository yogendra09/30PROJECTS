showData()

function addtask(){
       if($('#inpt-box').val() === ''){
        alert('write something')
       }else{
        // console.log('working',$('#inpt-box').val());
        let li = document.createElement("li");
        li.innerHTML = $('#inpt-box').val();
        $('#list-container').append(li)
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.append(span)
       }
       saveData();     
       $('#inpt-box').val('')  
}

$('#list-container').click(function(e){
    // console.log(e.target.tagName);
    if(e.target.tagName === 'LI'){
        saveData()
          e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){

        saveData()
          e.target.parentElement.remove();

    }
})


function saveData(){
    console.log($('#inpt-box').val());
    localStorage.setItem('data',$('#list-container').html());
}
function showData(){
    $('#list-container').html(localStorage.getItem('data'))
}