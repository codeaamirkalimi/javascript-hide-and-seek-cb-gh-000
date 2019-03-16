function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  var pullOut = document.getElementById('nested');
  return pullOut.querySelector('.target');
}
function increaseRankBy(n){
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt((i + n).toString(),10);
}
}
