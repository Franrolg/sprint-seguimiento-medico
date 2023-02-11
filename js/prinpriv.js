let sideNav = document.querySelector("#side-nav");
let openNavButton = document.querySelector("#open-nav-button");
let closeNavButton = document.querySelector("#close-nav-button");

openNavButton.addEventListener("click", function() {
  sideNav.style.width = "250px";
});

closeNavButton.addEventListener("click", function() {
  sideNav.style.width = "0";
});

let links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", function() {
    if (link.classList.contains("change-nav")) {
      let newContent = "";

      if (link.id === "link1") {
        newContent = `
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        `;
      } else if (link.id === "link2") {
        newContent = `
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
          <a href="#">Link 6</a>
        `;
      } else {
        newContent = `
          <a href="#">Link 7</a>
          <a href="#">Link 8</a>
          <a href="#">Link 9</a>
        `;
      }

      sideNav.innerHTML = newContent;
    }
  });
});