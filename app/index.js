const app = require("express")();
const appid = process.env.APPID;

app.get("/", (req,res) => 
res.send(`appid: ${appid} home page: echo back  hello!`))

app.get("/app1", (req,res) => 
res.send(`appid: ${appid} app1 page: echo back hello!`))
 
app.get("/app2", (req,res) => 
res.send(`appid: ${appid} app2 page: echo hello!`))
 
app.listen(appid, ()=>console.log(`${appid} is listening on ${appid}`))
