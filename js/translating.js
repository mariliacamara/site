window.addEventListener('DOMContentLoaded', function(translating){
  let lang = window.navigator.languages
  if (lang !== "pt") {
    var english = document.getElementsByClassName("en"),
      i;
    for (i = 0; i < english.length; i += 1) {
      english[i].style.display = "none";
    }

  } else {
    var portuguese = document.getElementsByClassName("pt"),
      i;
    for (i = 0; i < portuguese.length; i += 1) {
      portuguese[i].style.display = "none";
    }
  }
});
