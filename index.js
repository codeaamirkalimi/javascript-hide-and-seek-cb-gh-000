function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  var pullOut = document.getElementById('nested')
                        .querySelectorAll('div')
                        .getElementsByClassName('target');
  return pullOut;
}
