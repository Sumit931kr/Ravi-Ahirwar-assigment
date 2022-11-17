import React, { useEffect, useState } from 'react'
import './Allworkshop.css'
import {useNavigate} from 'react-router-dom'
import img from '../imgae/back.jpg'



const Allworkshop = (props) => {

    const { setdata , setShowupdate} = props
    const Navigate = useNavigate();
    const [products, setproducts] = useState([])

    const getsingledata = async (id) => {
        try {
            const response = await fetch(`https://ravi-ahirwar-assigment.vercel.app/api/workshop/${id}`)
            .then(res => res.json())
                .catch((err) => { console.log("ERROR ", err) })
            setdata(response);
            
        } catch (error) {
            console.log("Error", error);
        }
    }


    const fetchProducts = async () => {
        try {
            const response = await fetch('https://ravi-ahirwar-assigment.vercel.app/api/workshops')
                .then(res => res.json())
                .catch((err) => { console.log("ERROR ", err) })
            setproducts(response.reverse());

        } catch (error) {
            console.log("Error ", error)
        }
    }

    const updateworkshop = async (id) => {
        getsingledata(id);
        setShowupdate(true);
        Navigate('/createworkshop');
    }

    useEffect(() => {
        fetchProducts();
    }, [])



    const renderlist = products.map((product) => {

        const { workshopname, venue, type, url, date, _id } = product;
        return (
            <div className="card" style={{ width: "18rem" }} key={_id}>
                <img src={img} alt="alt" />
                <div className="card-body">
                    <div className="status">{type}</div>
                    <h5 className="card-title">{workshopname}</h5>
                    <div> <i className="fa-regular fa-calendar-days" ></i> {date}</div>
                    <div> <i className="fa-solid fa-earth-americas"></i> {venue}</div>
                    <a href={url} target="_blank"> <i className="fa-solid fa-wifi"></i> Go to the link</a>
                    <div className="pencil"><i className="fa-solid fa-pencil" onClick={()=>{updateworkshop(_id)}}></i></div>
                </div>
                </div>
                );
    });

    return (
        <div className='allworkshop-homepage'>
            <>
                {renderlist}
            </>
        </div>
    )
}

export default Allworkshop