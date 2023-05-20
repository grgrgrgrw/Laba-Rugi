const form = document.getElementById("form")
const pendapatan = document.getElementById("pendapatan")
const bebanGaji = document.getElementById("beban_gaji")
const bebanSewa = document.getElementById("beban_sewa")
const bebanPerlengkapan = document.getElementById("beban_perlengkapan")
const bebanAlat = document.getElementById("beban_alat")
const div = document.getElementById("hasil")
const keterangan = document.getElementById("ket")

const reset = document.getElementById("reset").addEventListener("click",function(){
    window.location.reload()
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let hasil
    let ket
    let totalBeban = parseInt(bebanGaji.value) + parseInt(bebanSewa.value) + parseInt(bebanPerlengkapan.value) + parseInt(bebanAlat.value)
    if (totalBeban < parseInt(pendapatan.value)) {
        hasil = parseInt(pendapatan.value) - totalBeban
        ket = "laba"
    } else {
        hasil = totalBeban - parseInt(pendapatan.value)
        ket = "Rugi"
    }
    const p = document.createElement("p")
    const p2 = document.createElement("p")
    p.innerText = `: ${hasil}`
    p2.innerText=`: ${ket}`
    keterangan.innerText=`Total ${ket} Sebesar :Rp. ${hasil}`
    div.append(p,p2)
})