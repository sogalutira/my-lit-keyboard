// EVENT LISTENERS
document.body.addEventListener('keydown', getLit);
document.body.addEventListener('keyup', unLit);

// VARIABLE DECLARATION
var shift1 = getID('shiftl');
var shift2 = getID('shiftr');
var row1 = getID('first-row');
var row2 = getID('second-row');
var row3 = getID('third-row');
var row4 = getID('fourth-row');
var keydown = false;

//  ALLOWS TAB IN TEXT AREA
var textareas = document.getElementsByTagName('textarea');
for(var i = 0; i < textareas.length; i++){
    textareas[i].onkeydown = function(e){
        if(e.keyCode == 9 || e.which == 9){
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;
            this.value = this.value.substring(0, start) + "\t" + this.value.substring(end);
            end = start + 1;
        }
    };
}

// FUNCTION TO GET ELEMENT BY ITS ID
function getID(id){
  var ids = document.getElementById(id);
  return ids;
}

function noClass(el1, el2, el3, el4){
  var element1 = el1.className = "";
  var element2 = el2.className = "";
  var element3 = el3.className = "";
  var element4 = el4.className = "";
}

// ADDS 'active' CLASS
function getLit(elId){
  var span = getID(elId.key.toLowerCase());
  if (elId.keyCode === 16 || elId.which === 16){
    shift1.classList.add('active');
    shift2.classList.add('active');
  }
  if (elId.key.toLowerCase() === 'tab'){
    setTimeout(function(){
      getID('tab').classList.remove('active');
    }, 200);
  }
  if (span === null){
    return false;
  }else{
  span.classList.add('active');
  }
}

// REMOVES active CLASS
function unLit(elId){
  keydown = false;
  var span = getID(elId.key.toLowerCase());
    if (elId.keyCode === 16 || elId.which === 16){
      shift1.classList.remove('active');
      shift2.classList.remove('active');
  }
  if (span === null){
    return false;
  }else{
    span.classList.remove('active');
  }
}

// FUNCTION FOR PULSING KEYBOARD LIGHT
function pulse(e){
  console.log('clicked');
  var text = getID('ta');
  text.focus();
  document.body.removeEventListener('keydown', getLit);
  noClass(row1, row2, row3, row4);
  row1.classList.add('pulsing');
  row2.classList.add('pulsing');
  row3.classList.add('pulsing');
  row4.classList.add('pulsing');
}

// FUNCTION RAINBOW KEYBOARD LIGHT
function rainbow(e){
  console.log('clicked');
  var text = getID('ta');
  text.focus();
  document.body.removeEventListener('keydown', getLit);
  noClass(row1, row2, row3, row4);
  row1.classList.add('rgb-cycle');
  row2.classList.add('rgb-cycle');
  row3.classList.add('rgb-cycle');
  row4.classList.add('rgb-cycle');
}

// FUNCTION FOR DEFAULT active CLASS
function defaultLit(e){
  document.body.addEventListener('keydown', getLit);
  document.body.addEventListener('keyup', unLit);
  noClass(row1, row2, row3, row4);
  var text = getID('ta');
  text.focus();
}

// CLEAR ALL TEXT IN TEXT BOX
function erase() {
  var text = getID('ta');
  text.value = "";
  text.focus();
}