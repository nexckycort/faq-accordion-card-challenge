const arrows = document.querySelectorAll('.icon-arrow')
const subtitles = document.querySelectorAll('.accordion-item-subtitle')

document.addEventListener('DOMContentLoaded', (event) => {
  eventListeners()
})

function eventListeners() {
  arrows.forEach((arrow) => arrow.addEventListener('click', selectAccordionItem))
  subtitles.forEach((subtitle) => subtitle.addEventListener('click', selectAccordionItem))
}

function selectAccordionItem(event) {
  const arrowSpan = event.target.parentElement.querySelector('.icon-arrow') ?? event.target.parentElement
  const accordionItemSubtitleP = arrowSpan.parentElement
  const accordionItemDiv = accordionItemSubtitleP.parentElement.querySelector('.accordion-item-body')

  if (arrowSpan.className.includes('icon-arrow-up')) {
    arrowSpan.classList.remove('icon-arrow-up')
    accordionItemSubtitleP.classList.remove('accordion-item-subtitle-select')
    accordionItemDiv.style.display = 'none'
  } else {
    const accordionItemBody = document.querySelector('.accordion-item-subtitle-select')?.parentElement.querySelector('.accordion-item-body')
    if (accordionItemBody) accordionItemBody.style.display = 'none'

    document.querySelector('.icon-arrow-up')?.classList.remove('icon-arrow-up')
    document.querySelector('.accordion-item-subtitle-select')?.classList.remove('accordion-item-subtitle-select')

    arrowSpan.classList.add('icon-arrow-up')
    accordionItemSubtitleP.classList.add('accordion-item-subtitle-select')
    accordionItemDiv.style.display = 'block'
  }
}
