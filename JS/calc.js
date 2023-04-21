var res;

function insert(char){

  var current = document.getElementById("current-operation").innerHTML;
  var lastEnter = current.slice(-1);

  if(char == '+' || char == '-' || char == '*' || char == '/'){
    if(lastEnter == '+' || lastEnter == '-' || lastEnter == '*' || lastEnter == '/'){
      backSpace()
      current = document.getElementById("current-operation").innerHTML;
    }
    document.getElementById("current-operation").innerHTML = current + char;
  }else{
    if(current == res){
      clr();
      document.getElementById("current-operation").innerHTML = char;
    }else{
      document.getElementById("current-operation").innerHTML = current + char;
    }
  }

  
  
}

function clr(){
  document.getElementById("current-operation").innerHTML = ''
}

function backSpace(){
  var current = document.getElementById("current-operation").innerHTML;
  document.getElementById("current-operation").innerHTML = current.substring(0, current.length -1)
}

function equals(){
  equation = document.getElementById("current-operation").innerHTML;
  if(equation){
    res = eval(equation);
    document.getElementById("current-operation").innerHTML = res;
  }
  console.log('res:'+res);
}
