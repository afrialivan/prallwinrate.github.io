function save () {
  const matc = Number(document.getElementById('match').value)
  const wr = document.getElementById('wr').value
  var hasil = Math.round(wr / 100 * matc)
  
  const menang = document.getElementById('kemenangan')
  menang.innerHTML=hasil + " Match"

  var kalah = Number(matc - hasil)
  const ngalah = document.getElementById('kalah')
  ngalah.innerHTML=kalah + " Match"
}
