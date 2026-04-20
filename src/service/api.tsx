import apiClint from "./apiClint";

type DashData = {
    users: string;
    revenue: string;
    orders:string;
    growth:string;
  };
  type UserData={
      id:number;
      name:string;
      email:string;
    }
  
  type UserDataArray = UserData[];
const userData=[
  {id:1,name:"asmath",email:"asmath@gmail.com"},
  {id:2,name:"tarun",email:"tarrun@emil.com"},
  {id:3,name:"bob",email:"mb@gmil.com"}
  ]

export const fetchDashData=function(){
    console.log("hi");
    
  return new Promise<DashData> ((resolve,reject)=>{
    const su=true
    setTimeout(()=>{
        if(su){
        resolve(
       {
         users:"1200",
         revenue:"24000rs",
         orders:"320",
         growth:"12%",
       }
    )}
    else{
        reject("error to load")
    }

},1000);
  });
}
export const fetchUsers=async function(){
  const resp=await apiClint.get("/users")
   return resp.data
}

// export const fetchUsers=async function(){
// const resp=await fetch("https://jsonplaceholder.typicode.com/users")
// console.log(resp);

// const response =await resp.json()
// console.log(response);
// return response
// }
  