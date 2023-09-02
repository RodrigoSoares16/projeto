function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar Rodrigo-light.png ")
  } else {
    //se tiver um light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatar Rodrigo.png")
  }
}
/*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

*/
