
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')
const submitEl = document.getElementById('submit')
const rYears = document.getElementById('y')
const rMonths = document.getElementById('m')
const rDays = document.getElementById('d')

submitEl.addEventListener('click', () => {

    const currentDate = new Date()
    const currentDay = currentDate.getDay()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear()

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if(currentDay >= day.value){
        if(currentMonth >= month.value){
            rDays.innerHTML = `${currentDay - day.value}`
            rMonths.innerHTML = `${currentMonth - month.value}`
            rYears.innerHTML = `${currentYear - year.value}`
        }else{
            rDays.innerHTML = `${currentDay - day.value}`
            rMonths.innerHTML = `${12 - Math.abs(currentMonth - month.value)}`
            rYears.innerHTML = `${currentYear - year.value - 1}`
        }

    }else if(currentDay < day.value){
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