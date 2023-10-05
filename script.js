function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const image = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de maykbrito sorrindo, usando óculos escuro, sem barba e fundo degradê do roxo para o azul."
    )
  } else {
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute(
      "alt",
      "Foto de maykbrito sorrindo, usando óculos e camisa preta, com barba e fundo amarelo."
    )
  }
}
