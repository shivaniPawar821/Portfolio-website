const express=require('express')
const path= require('path')
const fs = require('fs')

const app= express()
const PORT=3000;
const DATA_FILE = path.join(__dirname,"contacts.json");

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
/*app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})*/

app.post('/contact',(req,res)=>{
    console.log("form data received", req.body)
    const entry={
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        messages: req.body.messages,
        receivedAT: new Date().toISOString(),
    };
    
    fs.readFile(DATA_FILE,"utf-8",(err,data)=>{
        let all=[];
        if(!err && data){
            try{all=JSON.parse(data);}catch{}
        }
        all.push(entry);
        fs.writeFile(DATA_FILE,JSON.stringify(all,null,2),(err)=>{
            if(err) console.log("error saving",err)
                else console.log("success")
            res.redirect('/');
        });
        });
    })
    app.get('/_contacts',(req, res)=>{
        fs.readFile(DATA_FILE,'utf-8',(err,data)=>{
            if(err) return res.json([]);
            try{res.json(JSON.parse(data));}catch{res.json([])}
        })
    })

app.listen(PORT,()=>{
    console.log(`Server running http://localhost:${PORT}`)
});

