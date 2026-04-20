import Skeleton from "../components/skeleton";
import useFetch from "../hooks/useFetch";
import { fetchUsers } from "../service/api";
import { useState, useCallback, useEffect,useRef } from "react";


const debounce=function(fun,delay){
    let timer;
    return function(...a){
    clearTimeout(timer)
     timer = setTimeout(()=>{
        fun(...a)
        
    },delay)
  }
 }

const User=()=>{
const [search,setSearch]=useState<string>("")
const [filteredData, setFilteredData] = useState<any[]>([]);
const memoizedFetchUsers=useCallback(fetchUsers,[])
const lastCall:any=useRef<number>(0)

let {data, loading , error, refetch}= useFetch(memoizedFetchUsers)

useEffect(()=>
        setFilteredData(data || [])
    ,[data])

// const hi=useCallback(debounce( (value)=>{const filter=data?.filter((i)=>i.name.toLowerCase().includes(value.toLowerCase()))
//     setFilteredData(filter || [])
//     console.log(value)},500),[data])

 function handleSearch(value:string){
    setSearch(value)
//    hi(value)
//    throtelling
  const now=Date.now()
  if(now-lastCall.current>=1000){
    console.log(value,"throtelling")
    lastCall.current=now
  }
 }


 useEffect(()=>{
    let x=setTimeout(()=>{
        const filter=data?.filter((i)=>i.name.toLowerCase().includes(search.toLowerCase()))
        setFilteredData(filter || [])
    },1000)
    return ()=>{
        clearTimeout(x)
    }

 },[search,data])
    
    return (
        <>
        <div><h1>Users</h1></div>
        {loading?<><Skeleton/></>:error?<h1 style={{color:'red'}}>{error}<button onClick={()=>refetch()}>refetch</button></h1>:
        <>
        <div>
            <input type="text" placeholder="search user..." value={search} onChange={(e)=>handleSearch(e.target.value)}></input>
        </div>
        <div>
            <table border={1} cellPadding={10} cellSpacing={0} style={{width:"100%",marginTop:"20px"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody style={{border:"1px solid #333", height:"80px", textAlign:"center", verticalAlign: "middle"}}>
                    {filteredData.map((user:any)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    </>}
        </>

    )
}

export default User




