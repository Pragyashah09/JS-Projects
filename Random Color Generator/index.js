const getColor = () => {
    //Hex code
    const randomNumber = Math.floor(Math.random() * 16777215); //multiplie by this no. becoz we can get hexa decimal code by exactly this no. if we multiplie
    const randomCode = "#" + randomNumber.toString(16); //16 stande for hexa no. code
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode) //also copy the code
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)

//initial call
getColor();