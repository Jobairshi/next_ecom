import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import customerRouter from './routes/customer.js';
import productRouter from './routes/product.js';
import orderRouter from './routes/orders.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/customer", customerRouter);
app.use("/product", productRouter);
app.use("/orders",orderRouter)

app.get('',(req,res)=>{
    res.send("server started");
} )



app.listen(4000, () => {
  console.log("listending at port 4000");
});