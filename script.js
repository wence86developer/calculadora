//calculadora
//funccion borrar
function del(){
    var value=document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
}

//cambio diseño
var two=document.getElementById('two');
    two.addEventListener('click',function(){
        var body=document.querySelector('body');
        var toggle=document.getElementById('circle');
        body.classList.add('active1');
        body.classList.remove('active2');
        toggle.style.left='35%';
    })
var one=document.getElementById('one');
    one.addEventListener('click',function(){
        var body=document.querySelector('body');
        var toggle=document.getElementById('circle');
        body.classList.remove('active1');
        body.classList.remove('active2');
        toggle.style.left='0';
    })
var three=document.getElementById('three');
    three.addEventListener('click',function(){
        var body=document.querySelector('body');
        var toggle=document.getElementById('circle');
        body.classList.add('active2');
        body.classList.remove('active1');
        toggle.style.left='65%';
    })