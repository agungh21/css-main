function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
    var x = document.getElementById("dropdown");
    if (x.className === "dropdown") {
      x.className += " responsive";
    } else {
      x.className = "dropdown";
    }
  }
// copy paste
const textcopy = document.querySelector('.textcopy');
const buttoncopy = document.querySelector('.buttoncopy');
const messagecopy = document.querySelector('.messagecopy');

buttoncopy.onclick = function () {

  // for Internet Explorer

  if(document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(textcopy);
    range.select();
  }
  else if(window.getSelection) {
    // other browsers

    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(textcopy);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");

  }

  // Show messagecopy
  messagecopy.classList.add('active');
  
  // Hide messagecopy after 2 seconds
  setTimeout(function () {
    messagecopy.classList.remove('active');
  }, 2000);
  
};