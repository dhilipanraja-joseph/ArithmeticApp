document.addEventListener('DOMContentLoaded',start);
var num,n='',m='',Sum;
var x = getRandomInt(101,1);
var y = getRandomInt(101,1);
var operator = '';
var op = getRandomInt(5,1);
switch(op){
  case 1 : operator = '+';break;
  case 2 : operator = '-';break;
  case 3 : operator = '*';break;
  case 4 : operator = '/';break;
  default:break;
}
console.log("operator",operator);
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function start(){
  var numBtn = document.getElementsByClassName('cirbtn');
  if(x>y){
    document.getElementById('operation').innerHTML= x +" "+operator+" "+ y +" = ";
    Sum=sum(x,y,operator);
  }else{
    document.getElementById('operation').innerHTML= y +" "+operator+" "+ x +" = ";
    Sum=sum(y,x,operator);
  }
  for (var i=0;i<numBtn.length;i++){
    numBtn[i].addEventListener('click',fillText);
  }
}
function sum(a,b,c){
  switch(c){
    case '+': return a+b;break;
    case '-': return a-b;break;
    case '*': return a*b;break;
    case '/': return Math.floor(a/b);break;
    default: break;
  }
}
function fillText(event){
  num = event.target.textContent;
  n=num.toString();
  if(document.getElementById('chkNum').value == ""){
    m = n;
  }else{
    m = m+n;
  }
  document.getElementById('chkNum').value = m;
}

function clearText(){
  document.getElementById('chkNum').value = "";
}

function validate(){
  var textBox = document.getElementById('chkNum').value;
  var msg;
  if(textBox != ''){
    var num1 = parseInt(textBox);
    if(Sum == num1){
      document.getElementById("success").play();
      msg = 'correct answer!';
    }
    else{
      document.getElementById("fail").play();
      msg = 'wrong answer!';
    }
    document.getElementById('message').style.visibility = 'visible';
    document.getElementById('message').innerHTML = msg;
    document.getElementById('chkNum').value = Sum;
    setTimeout(function(){
      window.location.reload();
    },3000);
  }else{
    alert("enter number");
  }
}
