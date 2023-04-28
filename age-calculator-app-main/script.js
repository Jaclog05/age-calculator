
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const submitEl = document.getElementById('submit')
const rYears = document.getElementById('y')
const rMonths = document.getElementById('m')
const rDays = document.getElementById('d')

submitEl.addEventListener('click', () => {
    const untilBirthDay = Date.parse(`${year.value}-${month.value}-${day.value}`)
    const untilNow = Date.now()
    const secondsSinceDate = Math.floor((untilNow - untilBirthDay) / 1000)

    rYears.innerHTML = `${Math.floor(secondsSinceDate / 31536000)}`
    rMonths.innerHTML = `${Math.floor((secondsSinceDate % 31536000) / 2635200)}`
    rDays.innerHTML = `${Math.floor(((secondsSinceDate % 31536000) % 2635200) / 86400)}`
})