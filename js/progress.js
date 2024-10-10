//Obtener un elemento de HTML por id
const progress=document.getElementById("download")
const input= document.getElementsByName("descarga")[0]
let valor=0
input.addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        console.log("Enter")
    }else{
        console.log("Otra letra")
        changeWidth()
    }
})
function changeWidth(){
    let calculo=0
    valor=parseInt(input.value | 0)
    calculo=(valor/100)*100
    progress.value=calculo
    if(isNaN(input.value)){
        alert("Digite un número")
      }
}
