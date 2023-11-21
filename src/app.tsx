import { useEffect } from "react";
import { getMoviesService } from "./service/api";

export default function App() {

  useEffect(() => {
    list()
  }, [])

  const list =() => {

 const  params = {
      page: 1,
    }

    getMoviesService("popular", params).then((data) => {
      console.log(data)
    })
  }
   
  return (
    <div className="App">
      
      <h1>Oi</h1>
    </div>
  );
}
