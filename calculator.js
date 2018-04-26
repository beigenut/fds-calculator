const reVal = document.querySelector('#inputWindow');

function calc(obj) {
  let exp = obj.innerHTML;
  if(exp === '='){
    reVal.innerHTML = eval(reVal.innerHTML)
//    reset(obj)
  }
  else if(exp === 'AC'){
    reVal.innerHTML = '0';
  }
  else {
    if(reVal.innerHTML === '0'){
      reVal.innerHTML = exp;
    }else 
      reVal.innerHTML += exp;
  }
}

function minus() {
  reVal.innerHTML += '-'
}

function multi() {
  reVal.innerHTML += '*'
}

function divide() {
  reVal.innerHTML += '/'
}

function abs_plus_to_minus() {
  reVal.innerHTML = '-' + Math.abs(reVal.innerHTML) 
}

function percent() {
  reVal.innerHTML = reVal.innerHTML/100
}