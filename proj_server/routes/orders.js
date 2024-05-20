import express from 'express'
import client from '../database.js'
import { asyncDisposeSymbol } from 'puppeteer';

const orderRouter = express.Router();



async function OrderGethandler(req,res)
{

    let lists = [];
    try{
        const data  = await client.query('SELECT* FROM orders');
        lists = data.rows;
        return res.send(lists)
    }
    catch(err)
    {
        console.log("asda;dk;asldk");
        return res.send("bull asldkasld");
    }
}

async function OrderPosthandler(req,res)
{
    
     try{
        await client.query('INSERT INTO orders(cust_id,order_date,total_price) values($1,CURRENT_DATE,$2)',[req.body.cust_id,req.body.total_price]);
        return res.send("prduct inserted");
    }
    catch(err)
    {
        console.log(err);
        return res.send("errr");
    }
}

orderRouter.get("", OrderGethandler);
orderRouter.post("/",OrderPosthandler);


export default orderRouter;