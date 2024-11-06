function mobileMenu() {
  const navLinks = document.getElementById('it-links');
  navLinks.classList.toggle('show');

  const mobileMenu = document.querySelector('.it-mobilemenu');
  mobileMenu.classList.toggle('change');
}

function copyText() {
  let text = document.getElementById("p1").textContent;
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Text copied to clipboard!');
    })
    .catch(err => {
      console.error('Error copying text: ', err);
    });
}
