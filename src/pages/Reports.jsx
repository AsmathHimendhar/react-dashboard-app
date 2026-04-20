
import React, { useState } from 'react'
const Reports=()=>{
    const [option, setOption]=useState('')
    const data={
        monthly:{sales:1000, users:500, profit:500},
        yearly:{sales:12000, users:6000, profit:6000}
    }
const filterdData=data[option]
    return(
    <div><h1>reports</h1>
    <div><select value={option} onChange={(e)=>{setOption(e.target.value)}}>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
        </select>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'300px'}}>
            {<>
                <p>Sales:{filterdData?.sales}</p>
                <p>Users:{filterdData?.users}</p>
                <p>Profit:{filterdData?.profit}</p>
            </>}
             
        </div>
    
    </div>)
}

export default Reports