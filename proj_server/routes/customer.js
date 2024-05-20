import express, { query } from 'express';
import client from "../database.js";
import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.ts';

const customerRouter = express.Router();

async function customerGetHandler(req,res)
{
    let lists = [];
    try{
        const data = await prisma.customer.findMany();
        lists = data;
        return res.send(lists);
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).send("there is errorr");
    }
}

async function customerPostHandler(req,res)
{
    console.log(req.body);
    try{
      await  client.query('INSERT INTO customer(c_name,email,pass)VALUES($1,$2,$3)',[req.body.c_name,req.body.email,req.body.pass]);
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).send("errorr");
    }
    return res.send("customer added");
}



async function customerLoginHandler(req, res) {
  console.log(req.body);
  const email = req.body.email;
  const pass = req.body.pass;
  let lists = [];
  try {
    const data = await client.query("SELECT* FROM customer");
    lists = data.rows;
    const isFound = lists.find(
      (customer) => customer.email === email && customer.pass === pass);
    if (isFound) {
      return res.send("customre login succuesfull");
    }
    return res.send("login failed");
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
}

async function tempHandler(req,res)
{
    return res.send("it is logggin tempory");
}

customerRouter.post("/login",customerLoginHandler);
customerRouter.get("/login",tempHandler);

customerRouter.get("",customerGetHandler);
customerRouter.post("/", customerPostHandler)

export default customerRouter;
