const button2 = document.getElementById('myButton2');
const parent2 = button2.parentElement;

button2.addEventListener('mouseenter', () => {
  const buttonRect = button2.getBoundingClientRect();
  const parentRect = parent2.getBoundingClientRect();

  const maxTop = parentRect.height - buttonRect.height;
  const maxLeft = parentRect.width - buttonRect.width;

  const newTop = Math.floor(Math.random() * maxTop);
  const newLeft = Math.floor(Math.random() * maxLeft);

  button2.style.top = `${newTop}px`;
  button2.style.left = `${newLeft}px`;
});

button2.addEventListener('click', () => {
    const buttonRect = button2.getBoundingClientRect();
    const parentRect = parent2.getBoundingClientRect();
  
    const maxTop = parentRect.height - buttonRect.height;
    const maxLeft = parentRect.width - buttonRect.width;
  
    const newTop = Math.floor(Math.random() * maxTop);
    const newLeft = Math.floor(Math.random() * maxLeft);
  
    button2.style.top = `${newTop}px`;
    button2.style.left = `${newLeft}px`;
  });

  const button1 = document.getElementById('myButton1');
  const popup = document.getElementById('popupContainer');
  button1.addEventListener('click', () => { 
    popup.style.display = `block`;
  });

  const button3 = document.getElementById('myButton3');
  button3.addEventListener('click', () => { 
    alert("Ỏ, anh cảm ơn. Yêu em");
    popup.setAttribute('hidden');
  });

  const inputField = document.getElementById('myInput');

inputField.addEventListener('keydown', function(event) {
  // Gán giá trị 'Hello world' vào input field khi người dùng nhấn phím
  inputField.value = 'Em chỉ cần anh thôi';
});
