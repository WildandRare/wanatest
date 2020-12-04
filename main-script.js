function declare() {if (event.keyCode == 13) {document.getElementById('title').innerHTML = document.getElementById('inpt').value;}}

//function declare() {
//    if (event.keyCode == 13) {
//        document.getElementById('title').innerHTML = document.getElementById('inpt').value;
//    }
//}

function addTextArea(){var textArea = document.createElement('TEXTAREA'); textArea.className = 'textarea'; 
document.getElementById('bottom_container').appendChild(textArea)}
function getStory() {
    alert('Tyy')
    var textAreaAmount = document.body.getElementsByTagName('textarea').length;
    for (var countAmount = 0; countAmount < textAreaAmount; countAmount++) {
        var story;
        story = document.body.getElementsByTagName('textarea')[countAmount].innerHTML;
    }
    alert(story)
}
