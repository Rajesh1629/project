import React from 'react'
import axios from 'axios'

const Topnews = () => {

   const[topnews, setTopnews] =  React.useState()

   React.useEffect(()=>{
    axios.get('https://dummyjson.com/products').then(res => {setTopnews(res.data)})
   },[])

  return (
    <div>
        {topnews ? topnews.products.slice(0,1).map((item,index)=>{
            
            return(
                <div key={index}>
                    <img src={item.thumbnail} alt='img'/>
                    <p>{item.title}</p>
                </div>
            )
        }):""} 
    </div>
  )
}

export default Topnews