//submit form
const form = document.querySelector('form');

//this usecase will give you empty
//const height=parseInt(document.querySelector('#height).value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give me a valid height';
  }else 
  if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please give me a valid weight';
  }else{
  const bmi=  (weight/((height * weight)/1000)).toFixed(2);
  //show me result
  results.innerHTML=`<span>${bmi}</span>`;
}


});
