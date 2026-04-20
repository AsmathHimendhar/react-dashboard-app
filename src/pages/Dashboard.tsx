import {useNavigate} from "react-router-dom"
import Card from "../components/Cards"
import useFetch from "../hooks/useFetch";
import { fetchDashData } from "../service/api";
import Skeleton from "../components/skeleton";
const Dashboard=()=>{
    const navigate=useNavigate()
    const {data, loading , error, refetch}= useFetch(fetchDashData)
   return(
    <div>
        <h2>Dashboard page</h2>
        {loading?<><Skeleton/></>:error?<h1 style={{color:'red'}}>{error}</h1>:
          <div className="card-container">
            <Card title="Users" value={data?.users||""} />
            <Card title="Revenue" value={data?.revenue||""} />
            <Card title="Orders" value={data?.orders||""} />
            <Card title="Growth" value={data?.growth||""} />
          </div>
      }
    </div>
   ) 
}

export default Dashboard