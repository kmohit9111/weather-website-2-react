import axios from 'axios'

export function fetchAPIResponse(city){
    return function(dispatch){
        axios.get("http://api.weatherstack.com/current?access_key=fc8014fc135f9fb6845c1842695d84f5&query=" + city)
        .then(response=>{
            let arr = [];
            for (var key in response.data.location) {
              arr.push(response.data.location[key]);
            }
            dispatch({type:"FETCH_LOCATION", payload:arr});
            let arr2 = [];
            for (var key2 in response.data.current) {
               arr2.push(response.data.current[key2]);
            
            } 
            
            console.log(arr2);
            
            arr2.splice(5, 1);
        
            dispatch({type:"FETCH_WEATHER", payload:arr2});

            let arr3 = [];
            for (var key3 in response.data.current.condition) {
              arr3.push(response.data.current.condition[key3]);
            }

            
        }).catch(err=>{
            console.log(err)
        });     
        
   }
}
