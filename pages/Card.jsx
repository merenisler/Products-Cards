import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Card = () => {

    const [allData, setAllData] = useState([])

    const navigate = useNavigate()
    useEffect(() => {
        const getData = async() => {
            const {data} = await axios.get('https://fakestoreapi.com/products')
            setAllData(data)
        }
        getData()
    }, [])

    console.log(allData, "data")

  return (
    <>
        <div style={{textAlign: 'center', marginLeft: '150px'}}>
            {
                allData.map((data, index) => (
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '60px'}} key={index}>
                        <div style={{fontSize: '20px', marginLeft: '25px', marginRight: '25px'}}>
                            {data.id}-
                        </div>
                        <img width={180} src={data.image} alt="" />
                        <div style={{fontSize: '20px', marginLeft: '25px', width: '350px', marginRight: '25px'}}>
                            {data.title}
                        </div>
                        <div onClick={() => navigate(`/detail/${data.id}`)} style={{fontSize: '20px', marginLeft: '25px', marginRight: '25px', width: '100px', textAlign: 'center', border: '1px solid black'}}>
                            İncele
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Card