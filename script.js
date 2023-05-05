
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const submitEl = document.getElementById('submit')
const rYears = document.getElementById('y')
const rMonths = document.getElementById('m')
const rDays = document.getElementById('d')

submitEl.addEventListener('click', () => {

    validation()

    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear()

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(validation() && currentDay >= day.value){
        if(currentMonth >= month.value){
            rDays.innerHTML = `${currentDay - day.value}`
            rMonths.innerHTML = `${currentMonth - month.value}`
            rYears.innerHTML = `${currentYear - year.value}`
        }else{
            rDays.innerHTML = `${currentDay - day.value}`
            rMonths.innerHTML = `${12 - Math.abs(currentMonth - month.value)}`
            rYears.innerHTML = `${currentYear - year.value - 1}`
        }

    }else if(validation() && currentDay < day.value){
        if(currentMonth > month.value){
            rDays.innerHTML = `${daysInMonth[month.value - 1] - Math.abs(currentDay - day.value)}`
            rMonths.innerHTML = `${Math.abs(currentMonth - month.value) - 1}`
            rYears.innerHTML = `${currentYear - year.value}`
        }else {
            rDays.innerHTML = `${daysInMonth[month.value - 1] - Math.abs(currentDay - day.value)}`
            rMonths.innerHTML = `${12 - Math.abs(currentMonth - month.value) - 1}`
            rYears.innerHTML = `${currentYear - year.value - 1}`
        }
    }
})

const validation = () => {

    const pElements = document.querySelectorAll('h6')
    const errorYearEl = document.getElementById('errorYear')
    const errorMonthEl = document.getElementById('errorMonth')
    const errorDayEl = document.getElementById('errorDay')
    const enteredDate = Date.parse(`${year.value}-${month.value}-${day.value}`)
    const currentDate = Date.now()

    if(!day.value || !month.value || !year.value){

        pElements.forEach(p => {
            p.innerText = 'This field is required'
            p.parentElement.classList.add('errorClass')

        })
        return false
    }else {
        pElements.forEach(p => {
            p.parentElement.classList.remove('errorClass')
            p.innerHTML = ''
        })
        if(enteredDate > currentDate){
            errorYearEl.parentElement.classList.add('errorClass')
            errorYearEl.innerText = 'Must be in the past'
            return false
        }else if(day.value > 31 || day.value <= 0){
            errorDayEl.parentElement.classList.add('errorClass')
            errorDayEl.innerText = 'Must be a valid day'
            return false
        }else if(month.value > 12 || month.value <= 0){
            errorMonthEl.parentElement.classList.add('errorClass')
            errorMonthEl.innerText = 'Must be a valid month'
            return false
        }else {
            return true
        }
    }
}