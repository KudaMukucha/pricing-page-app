"use client"
import { Package } from "@/components/Package";
import { annualPricing, monthlyPricing } from "@/data";
import { useState } from "react";

export default function Home() {
  // console.log(monthlyPricing);
  const [pricing,setPricing] = useState('monthly')
  const [pricingData,setPricingData] = useState(monthlyPricing)
  console.log(pricing);
  // const handleMonthlyPricing=()=>{
  //   setPricing('monthly')
    
  // }
  // const handleAnnualPricing=()=>{
  //   setPricing('annually')
  // }
  const handlePricing=(pricing)=>{
    setPricing(pricing)
    if(pricing == 'monthly'){
      setPricingData(monthlyPricing)
    } else{
      setPricingData(annualPricing)
    }
  }
  return (
  <main>
    <section className="header">
      <h2>Pricing</h2>
      <p>Sign up in less than 30 seconds. Try out our 7-day risk-free trial. Upgrade at anytime, no questions,no hustle.</p>
      <div className="buttons">
          <button className={pricing === 'monthly' ? "monthly-btn active-btn" : 'monthly-btn'} onClick={()=> handlePricing('monthly')}>Monthly</button>
          <button className={pricing === 'annually' ? "annually-btn active-btn" :"annually-btn"} onClick={()=> handlePricing('annually')}>Annually</button>
      </div>
    </section>

    <section className="pricing-packages">
      {
       pricingData.map((packageData,i)=>{
          return(
            <Package key={i} data={packageData}/>
          )
        })
      }
    </section>
  </main>
  );
}
