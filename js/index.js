const credit = document.getElementById('credit')

credit.addEventListener('mouseover', () => {
    credit.innerHTML = "Credit for this art goes to Harper. I, Máni Fay, wrote the article and made the logo for Mani Fay's Fiction."
})

credit.addEventListener('mouseout', () => {
    credit.innerHTML = "Hover over this text to see the credits for the artist and article!"
})