import "./Period.css"

export default function Period(title, src) {
  const main = document.querySelector('main')
  
  const periodContainer = document.createElement("div")
  periodContainer.setAttribute("class", "period")

  const periodImage = new Image()
  periodImage.src = src

  const periodTitle = document.createElement("a")
  periodTitle.textContent = title

  periodContainer.appendChild(periodImage)
  periodContainer.appendChild(periodTitle)

  periodContainer.addEventListener('click', () =>{
    console.log(main.childNodes)



  })

  return periodContainer
}
