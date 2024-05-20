
import Hero1 from "@/components/Hero1";
import Mainshow from "@/components/Mainshow";
import ShopNow from "@/components/ShopNow";
import ProductShow from "@/components/productShow";
import Products from "@/components/products";
import Image from "next/image";

export default function Home() {
  return (
   
     <div className="container m-auto items-center" >
       <Hero1/>
        <div className="flex justify-center align-middle">
          <ShopNow/>
        </div>
       <Mainshow/>
     </div>
   
  );
}
