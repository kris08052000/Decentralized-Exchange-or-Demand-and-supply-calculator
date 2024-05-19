import  Express  from "express";
const app = Express();
app.use(Express.json());

let EtheriumBalance = 200;
let USDBalance = 700000;


app.post("/buy-assests", (req,res)=>{
    const quantity = req.body.quantity;
    const updatedEtheriumQty = EtheriumBalance - quantity;
    const updatedUSDBalance = EtheriumBalance * USDBalance / updatedEtheriumQty; 
    const PaidAmount = updatedUSDBalance - USDBalance;

    EtheriumBalance = updatedEtheriumQty;
    USDBalance = updatedUSDBalance;

    res.json({
        message: `You paid ${PaidAmount} USD for ${quantity} Etherium`
    })

})

app.post("/sell-assests", (req,res)=>{
    const quantity = req.body.quantity;
    const updatedEtheriumQty = EtheriumBalance + quantity;
    const updatedUSDBalance = EtheriumBalance * USDBalance / updatedEtheriumQty; 
    const GottenAmount =  USDBalance - updatedUSDBalance;

    EtheriumBalance = updatedEtheriumQty;
    USDBalance = updatedUSDBalance;

    res.json({
        message: `You got ${GottenAmount} USD for ${quantity} Etherium`
    })
})

app.listen(3000)