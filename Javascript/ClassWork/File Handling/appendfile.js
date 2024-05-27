const fs= require('fs')

fs.appendFile('write.txt', 'this is another line to',(error)=>{
    if(error)
        {
            console.log(error)

        }else{
            console.log("data saved")
        }
})