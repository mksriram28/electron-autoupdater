
const click = document.getElementById("click")

click.addEventListener("click",()=>{
    ipcRenderer.send("senddata:tomain",{
        "image":"2 images",
        "type":"insulator"
    })
    
})

ipcRenderer.on("sendingdatafrombackend",data=>{
    console.log(data)
})