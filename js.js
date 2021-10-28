let heading = document.getElementById('heading');
let content = document.getElementById('content');
content.style.display = 'none';
heading.addEventListener('click', function(e) {
    if(content.style.display == 'none'){
        content.style.display = 'block';
        content.style.transition = '0.5s ease-in';
    }
    else{
        content.style.display = 'none';
    }
});