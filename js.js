let heading = document.getElementById('heading');
let content = document.getElementById('content');
let arrow = document.getElementById('arrow-head');
content.style.display = 'none';
heading.addEventListener('click', function(e) {
    if(content.style.display == 'none'){
        content.style.display = 'block';
        heading.innerHTML = "THIS IS <br>&emsp;&emsp;&emsp; FINTECH"
        content.style.transition = '0.5s ease-in';
        arrow.style.display = 'none';
    }
    else{
        content.style.display = 'none';
        heading.innerHTML = "WHAT IS<br>&emsp;&emsp;&emsp;FINTECH&emsp14;?"
    }
});