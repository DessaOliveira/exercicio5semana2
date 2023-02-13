
let cronometro = 10

function regressiva() {
   if (cronometro == 0) {
    console.log("Acabou seu tempo!! Tente novamente!!")
    clearTimeout(time)
   } else {
    cronometro--
    console.log(cronometro)
   }
}
const time = setInterval(regressiva,1000)
