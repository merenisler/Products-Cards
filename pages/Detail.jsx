import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
  
    const navigate = useNavigate()
    const [singleData, setSingleData] = useState([])
    const {id} = useParams()
  
    useEffect(() => {
        const getData = async() => {
            const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleData(data)
        }
        getData()
    }, [id])

    console.log(singleData, "SingleData")

    return (
    <>
        <div style={{textAlign: 'center'}}>
            <img width={250} src={singleData.image} alt="" />
            <div style={{fontSize: '25px'}}>
                {singleData.id}- 
                {singleData.title}
            </div>
            <br />
            <div style={{fontSize: '20px'}}>
                {singleData.price}$
            </div>
            <br />
            <div style={{fontSize: '18px'}}>
                {singleData.description}
            </div>
        </div>
    </>
  )
}

export default Detail