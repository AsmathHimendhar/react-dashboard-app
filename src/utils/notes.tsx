// debounce
{
// const debounce=function(fun,delay){
//     let timer;
//     return function(...a){
//     clearTimeout(timer)
//      timer = setTimeout(()=>{
//         fun(...a)
        
//     },delay)
//   }
//  }
// let hi=useCallback(debounce( (value)=>{const filter=data?.filter((i)=>i.name.toLowerCase().includes(value.toLowerCase()))
//     setFilteredData(filter || [])
//     console.log(value)},500),[data])

//  function handleSearch(value:string){
//     setSearch(value)
//    hi(value) is same as function(value){
//     clearTimeout(timerhi)
//     timerhi = setTimeout(()=>{
//         const filter=data?.filter((i)=>i.name.toLowerCase().includes(value.toLowerCase()))
//     setFilteredData(filter || [])
//     console.log(value)},500)()  shelf invoke
   
//  }
// let bye=useCallback(debounce( (value)=>{const filter=data?.filter((i)=>i.name.toLowerCase().includes(value.toLowerCase()))
//     setFilteredData(filter || [])
//     console.log(value)},500),[data])

//  function handlefetch(value:string){
//     setSearch(value)
//    bye(value)
   
//  }

// so when ever you assign debounce to a variable like hi and bye 
// then saparate timer will created like timerhi and timerbye
// now you are callinkg the search function with value 'a' then the timerhi value will be null in linee cleartimeout and next line settimeout id with a is assgned to timerhi like 'id-a'
// when you type abc within dely timerhi value 'id-a' will cleared and new timerhi value with id-abc is created 
// and this will complete the fun inside settimeou if nothing is typed within delay 
// like this ssimilar will happen to fetch function by timerbye
// because of closuer in js new time reference is reated each time debounce is caled and given to return function
}

// closuer
{
// clouser is method whre inner function remeber the varible from its outer function

// by this clouser we can ctete a account function of user and update the balence induvidually for debit or credict accounts 
// let update=function(){
//     let bal
//     return function(type,amount){
//         if(type==="debit"){
//             bal=bal-amount
//         }
//         else if(type==="credit"){
//             bal=bal+amount
//         }
//         return bal
//     }

// }
// ahrcradit=update()
// ahrdebit=update()

// if ahr crdited 1000 to credit account
// then ahrcrdited("credit",1000) //1000
// if ahr crdited 1000 to debit account
// then ahrdebit("debit",1000) //1000

// if ahr withdraw 500 from credit account
// then ahrcrdited("debit",500) //500
// and ahrdebit balance will be 1000 as it is
}
// function api(a){

//     const p=new Promise((R,E)=>{
//      fetch(`https://jsonplaceholder.typicode.com/todos/${a}`)
//     .then(function(r){
    
//      if (!r.ok) throw new Error("Network response was not ok");
//             return r.json();
//     })
//     .then(r=>{
//     return r}).then(r=>R(r))
//     .catch(e=>E(e))
    
//     })

//     p.then(v=>{document.getElementById("demo").innerHTML =v.title;
//     }).catch(e=>document.getElementById("demo").innerHTML = e)
//     setTimeout(function() {
//     document.getElementById("demo").innerHTML ="YFYGI&TUGO*GLIUOILOGLBGIU";
//     }, 10);
    
//     }
    