let input=document.getElementById("num")
let numSelect=document.getElementById("select")
let result=document.getElementById("result")
let showData=document.getElementById("history")
let showBtn=document.getElementById("btn")

let obj={}
if(localStorage.length>0) {
    let.localStorageData=JSON.parse(localStorage.getItem("data"))
    showData.innerHTML= localStorageData
    obj={...localStorageData}
}
showBtn.addEventListener("click",()=>{
    if(input.value!=="" && numSelect.value!==""){
        let r =+ input.value*+ numSelect.value
        result.innerHTML = r
        obj[`${input.value}*${numSelect.value}`] = r
        localStorage.setItem("data",JSON.stringify(obj))
    }else{
        alert("please enter nums")
    }
});