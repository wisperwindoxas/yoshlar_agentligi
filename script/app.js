// [1,2,3,4,5,6,7,8,9,10,11,12, "1-Kun", "2-Kun", "3-Kun", "4-Kun", "5-Kun", "6-Kun", "7-Kun", "8-Kun", "9-Kun", "10-Kun", "11-Kun", "12-Kun"]



const editor = new EditorJS({
    holderId: 'editorjs',
});


let regionalArray = [{
        id: 1,
        name: "Angor",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`,

    },
    {
        id: 2,
        name: "Bandixon",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 3,
        name: "Boysun",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 4,
        name: "Denov",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 5,
        name: "Jarqo'rg'on",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 6,
        name: "Qiziriq",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 7,
        name: "Qumqo'rg'on",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 8,
        name: "Oltinsoy ",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 9,
        name: "Sariosiyo",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 10,
        name: "Sho'rchi ",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 11,
        name: "Termiz",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    },
    {
        id: 12,
        name: "Uzun",
        rayting: 10,
        finnalTime: `${new Date().getHours()}: ${new Date().getMinutes()}`
    }
]



let regionalinfo = document.querySelector('.regionalinfo')



regionalArray.forEach((item, index) => {

    let tr = document.createElement('tr')
    let time = document.createElement('input')
    time.setAttribute('type', 'datetime-local')

    time.setAttribute(`date-regional`, `time-${item.name}`)
    time.setAttribute(`date-time`, `${item.name}-time`)
    time.setAttribute('value', localStorage.getItem(`time-${item.name}`))
    let timeDays = document.createElement('span')
    let timeHours = document.createElement('span')
    let timeMinutes = document.createElement('span')
    let timeSeconds = document.createElement('span')
    let start = document.createElement('button')
    let stop = document.createElement('button')

    start.classList.add('start')
    start.innerHTML = 'Start'
    stop.classList.add('stop')
    stop.innerHTML = 'Stop'

    let numbers = document.createElement("td");
    let regionals = document.createElement("td");
    let setBalls = document.createElement("td");
    let setTimes = document.createElement("td");
    let finnalTimes = document.createElement("td");
    let getBalls = document.createElement("td");
    let persons = document.createElement("td");
        persons.setAttribute("contenteditable", "true")
    let btns = document.createElement("td");

    let timeInterval;
    let getsAllHourse;
    let gap

    start.addEventListener('click', () => {
        let getDataTime = time.getAttribute('date-regional')
        localStorage.setItem(getDataTime, time.value)
            countDown()
            let getSeconds = getsAllHourse * 60 * 60 * 1000
            time.setAttribute('data-milliSeconds', getSeconds)
            localStorage.setItem(`data-milliSeconds-${item.name}`, getSeconds)
        

            if (localStorage.getItem(`isStart-${item.name}`) == 'true') {
                start.setAttribute('disabled', `true`)
                start.style.opacity = 0.5
                start.style.cursor = 'not-allowed'
            } else {
                start.setAttribute('dis', true)
                start.style.opacity = 1
                start.style.cursor = 'pointer'
            }
        

        localStorage.setItem(`isStart-${item.name}`, true)

    })




    stop.addEventListener('click', () => {
        clearInterval(timeInterval)
        localStorage.removeItem(`time-${item.name}`)
        getBalls.innerHTML = getsAllHourse
        localStorage.setItem(`isStart-${item.name}`, false)
        getBalls.innerHTML = 10
        // let getFinnalTime = getsAllHourse - 



    })





    if (localStorage.getItem(`isStart-${item.name}`) == 'true') {
        start.setAttribute('disabled', `true`)
        start.style.opacity = 0.5
        start.style.cursor = 'not-allowed'
    } else {
        start.setAttribute('dis', true)
        start.style.opacity = 1
        start.style.cursor = 'pointer'
    }



    timeInterval = setInterval(countDown, 1000)

    // Count down timer


    function countDown() {
        gap = new Date(localStorage.getItem(`time-${item.name}`)) - new Date()

        let days = Math.floor(gap / (1000 * 60 * 60 * 24))
        let hours = Math.floor(gap / (1000 * 60 * 60) % 24)
        let minutes = Math.floor(gap / (1000 * 60) % 60)
        let seconds = Math.floor(gap / (1000) % 60)

        if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
            clearInterval(timeInterval)
            return
        }


        getsAllHourse = (days * 24 + hours)

        
 

        timeDays.innerHTML = `${days} Kun`
        timeHours.innerHTML = ` ${hours < 10 ? `0${hours}`: hours}:`
        timeMinutes.innerHTML = `${minutes < 10 ? `0${minutes}`: minutes}:`
        timeSeconds.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`
        finnalTimes.append(timeDays, timeHours, timeMinutes, timeSeconds)
    }




    // set text
    numbers.innerHTML = item.id;
    regionals.innerHTML = item.name;
    setBalls.innerHTML = item.rayting;
    setTimes.append(time);
    persons.innerHTML = "Abdiev Anvar";
    btns.append(start);
    btns.append(stop);



    // append to table

    tr.append(numbers);
    tr.append(regionals);
    tr.append(setBalls);
    tr.append(setTimes);
    tr.append(finnalTimes);
    tr.append(getBalls);
    tr.append(persons);
    tr.append(btns);
    regionalinfo.append(tr);


})