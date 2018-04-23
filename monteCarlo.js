function monteCarlo() {

  var x
  var y
  var shotsCount=document.getElementById("shotsCount").value
  var successCount=0
  var r=500
  var xRelative
  var yRelative

  for (var i = 0; i < shotsCount; i++) {

    x=1000*Math.random()
    y=1000*Math.random()

    xRelative=Math.abs(500-x)
    yRelative=Math.abs(500-y)

    if (xRelative*xRelative+yRelative*yRelative <= r*r) {
      successCount++
      document.getElementsByClassName("bigSquere")[0].innerHTML+="<div class=\"dotIn\" style=\"left:"+x+"px;bottom:"+y+"px;\"></div>\n"
    } else {
      document.getElementsByClassName("bigSquere")[0].innerHTML+="<div class=\"dotOut\" style=\"left:"+x+"px;bottom:"+y+"px;\"></div>\n"
    }
  }
  document.getElementById("trafienia").innerText="Trafienia: "+successCount+" na "+shotsCount+" strzałów."
  document.getElementById("wynik").innerText="Obliczyłem PI = "+4*successCount/shotsCount
}
