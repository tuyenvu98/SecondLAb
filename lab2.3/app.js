const containerDiv = document.querySelectorAll('input');
document.addEventListener('keyup', function (event) {
  let flag = false;
  containerDiv.forEach((input) => {
    if (event.key == input.value) {
        input.parentElement.querySelector(
            '.arrows'
          ).innerHTML = ` <i class="arrow up"></i>`;
      if (event.key >= 5) {
        flag = true;
      } 
    }
    if (flag) {
      input.style.backgroundColor = 'red';
    }
  });
  flag = false;
});