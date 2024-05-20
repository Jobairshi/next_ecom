import express from 'express'
import client from '../database.js'

const productRouter = express.Router();

async function tempHandler(req,res)
{
    return res.send("it is logggin tempory");
}



async function productGetHandler(req,res)
{
    console.log("this is products section");
    let lists = [];
    try{
        const data = await client.query('SELECT* FROM product');
        lists = data.rows;
        return res.send(lists);
    }
    catch(err)
    {
        console.log("bhaaai wrong acheee");
        return res.send("bhaai bhaai wrong dichos");
    }
}


async function productPostHandler(req,res)
{

    try{
        await client.query('INSERT INTO product (p_name,p_brand,p_cat,p_desc,p_quan,img_link)VALUES($1,$2,$3,$4,$5,$6)',
        [req.body.p_name,
        req.body.p_brand,
        req.body.p_cat,
        req.body.p_desc,
        req.body.p_quan,
        req.body.img_link]);
        return res.send("product " + req.body.p_name + " is added");
    }
    catch(err){
        console.log(err);
        return res.send("tehre is errrro");
    }
   
}



productRouter.get("",productGetHandler);
productRouter.post("/", productPostHandler);
export default productRouter;