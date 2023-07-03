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
                    <img src={item.thumbnail} alt='img' style={{"height": "42vh","width": "35vw"}}/>
                    <p>{item.description}</p>
                </div>
            )
        }):""} 
         {topnews ? topnews.products.slice(1,4).map((item,index)=>{
            
            return(
                <div className='article-sm' key={index}>
                    <img src={item.thumbnail} alt='img' style={{"height": "32vh", "width": "18vw"}}/>
                    <p>{item.description}</p>
                </div>
            )
        }):""} 
    </div>
  )
}

export default Topnews