const name = document.querySelector('.name');
const age = document.querySelector('.age');
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const errorMsg1 = document.querySelector('.errorAge');
const errorMsg2 = document.querySelector('.errorName');
const changingcolor= document.getElementById('c')
btn.addEventListener('click', function (e) {
  e.preventDefault();
  if(isNaN(name.value)){
    errorMsg2.classList.add('errorName');
  if (+age.value < 0) {
    errorMsg1.classList.remove('errorAge');
    age.value = '';
  } else {
    output.innerHTML = `<p>Name : ${name.value}</p> <p>Age : ${age.value}</p>  `;
    errorMsg1.classList.add('errorAge');
    name.value = '';
    age.value = '';
  }}
  else{
    errorMsg2.classList.remove('errorName');
    name.value = '';
  }
});

changingcolor.addEventListener('click',function()
{
  changingcolor.style.color = 'red';
  changingcolor.style.textDecoration= 'line-through';
})