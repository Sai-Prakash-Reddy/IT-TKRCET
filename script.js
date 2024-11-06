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

function copyText(id) {
  let text = document.getElementById(id).textContent;
  
  // Check if clipboard API is supported
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text) 
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch(err => {
        console.error('Error copying text: ', err); 
        alert("An error occurred while copying text.");
      });
  } else {
    console.error("Clipboard API is not supported on this browser.");
    alert("Clipboard functionality is not supported in this environment.");
  }
}
