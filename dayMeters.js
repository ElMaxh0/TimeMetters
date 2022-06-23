setInterval(() => {
    var dayporcent = 24/100
    var today = new Date();
    var porcentagemdia = ((((100/24)*(today.getHours()))))+((((100/24)/60))*(today.getMinutes()+1))+(((100/24/60/60)*(today.getSeconds()+1)))
    var porcentagemsemana = (((100/7)*today.getDay())+((100/7/100)*porcentagemdia))
    var porcentagemmensal = (((100/30)*today.getDate())+(100/30/100)*porcentagemsemana)
    var porcentagemanal = (((100/12)*today.getMonth())+((100/12/100)*porcentagemmensal))


    document.getElementById("porcentagemDoDia").innerHTML = ""+porcentagemdia +"%"
    document.getElementById("porcentagemSemana").innerHTML = ""+porcentagemsemana+"%"
    document.getElementById("porcentagemMes").innerHTML = ""+porcentagemmensal+"%"
    document.getElementById("anaPorcentagem").innerHTML = ""+porcentagemanal+"%"

    document.getElementById("dayBar").style = "width :"+(100- porcentagemdia)+"%;"
    document.getElementById("weekBar").style = "width :"+(100- porcentagemsemana)+"%;"
    document.getElementById("mouthBar").style = "width :"+(100- porcentagemmensal)+"%;"
    document.getElementById("analBar").style = "width :"+(100- porcentagemanal)+"%;"


    console.log(porcentagemdia)
}, 1000)