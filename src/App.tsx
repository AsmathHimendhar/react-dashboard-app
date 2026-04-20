import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import Card from "./components/Cards"
import Dashboard from"./pages/Dashboard"
import User from"./pages/User"
import Reports from"./pages/Reports"
import {Routes, Route} from "react-router-dom"
function App() {

 
 
 
 // const [data,setData]=useState<Data|null>(null)
// const [loading,setLoading]=useState<boolean>(true)
// const [error,setError]=useState<string | null>(null)
//     useEffect(()=>{
//       (async()=>{ 
//         try {
//            setLoading(true); 
//           const resp = await fetchDashData();
//           setData(resp);
          
//       } catch (error) {
//         setError(error)
//           console.error("Failed to fetch:", error);
//       } finally {
//         setLoading(false);
//       }

//       })()


//     },[])

  return (
    <div className="app">
      <Header />
        
      <div className="layout">
      <Sidebar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/users" element={<User/>}/>
          <Route path="/reports" element={<Reports/>}/>
        </Routes>
      </div>
    
      </div>
    </div>
  );
}

export default App;