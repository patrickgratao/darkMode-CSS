function handleCheckDarkMode () {
  if (localStorage.getItem('@netflix/darkMode')) {
    document.querySelector('body').classList.add('darkMode');
    document.getElementById('darkModeSwitch').setAttribute("checked", "checked");
  }
}

function handleDarkMode(checkbox) {
  if (checkbox.checked) {
    document.querySelector('body').classList.add('darkMode');
    document.getElementById("darkModeSwitch").setAttribute("checked", "checked");
    localStorage.setItem('@netflix/darkMode', 'true');
}else{
    document.querySelector('body').classList.remove('darkMode');
    document.getElementById("darkModeSwitch").removeAttribute("checked");
    localStorage.removeItem('@netflix/darkMode');

  }
}