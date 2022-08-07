const express= require('express')
const cors= require('cors')
const app = express();
app.get('/',(req,res)=>{
    res.send('ok');
})
app.listen(process.env.PORT||5000,()=>{
    console.log(`listening at port${process.env.PORT||5000}`)
})