const endDate = "23 December 2022 4:00 AM"

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")
// const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000; //mili second change to second divide by 1000
    //console.log(diff);

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24); //we will get days now
    inputs[1].value = Math.floor((diff / 3600) % 24); //calculate remaining hours
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
    // console.log(end);
    // console.log(now);
}

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 min = 3600 sec
 */

//initial call
clock()

setInterval(
    () => {
        clock()
    },
     1000
)