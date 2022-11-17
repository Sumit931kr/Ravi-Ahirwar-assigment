import React from 'react'
import './CreateWorkShop.css'
import { useNavigate } from 'react-router-dom'
import img from '../imgae/back.jpg'

const Createworkshop = (props) => {

    const Navigate = useNavigate();
    const { data, setdata, showupdate, setShowupdate } = props


    const update = async (workshopname, type, venue, url, date, _id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/updateworkshop/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ workshopname, type, venue, url, date })
            });

             await response.json();

        } catch (error) {
            console.log("Error", error);
        }
    }

    const adddata = async (workshopname, type, venue, url, date) => {

        // APi CAll to Addinga workshop
        try {
            const response = await fetch('http://localhost:5000/api/createworkshop', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ workshopname, type, venue, url, date })
            });
               await response.json();

        } catch (error) {
            console.log("Error", error);
        }

    }

    const handleonClick = (e) => {
        e.preventDefault();
        const { workshopname, type, venue, url, date } = data;
        adddata(workshopname, type, venue, url, date);
        setdata({ workshopname: "", venue: "", type: "", url: "", date: "" })
        alert("New workshop added")
    }


    const handleonClickUpdate = (e) => {
        e.preventDefault();
        const { workshopname, type, venue, url, date, _id } = data;
        update(workshopname, type, venue, url, date, _id);
        setShowupdate(false);
        setdata({ workshopname: "", venue: "", type: "", url: "", date: "", _id: "" })
        Navigate('/');
    }



    const onchange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }


    return (
        <div className='createworkshop-container'>
            {!showupdate ?<div className='text'> Create a Workshop</div> : <div className='text'> Edit a WorkShop : {data.workshopname}</div>
}
            <form className='form'>

                <div className='image'>  <img src={img} alt="alt" /></div>

                <div className="form2">
                    <div className="input-style"> WorkShop Name
                        <input className='input-size' onChange={onchange} type="text" name='workshopname' value={data.workshopname} placeholder='Talk Show...                                   ' />
                    </div>
                    <div className="input-style"> WorkShop Venue
                        <input className='input-size' onChange={onchange} type="text" name='venue' value={data.venue} placeholder='Delhi India...                                   ' />
                    </div>
                    <div className="input-style"> WorkShop Type
                        <input className='input-size' onChange={onchange} type="text" name='type' value={data.type} placeholder='Online / Person...                                   ' />
                    </div>
                    <div className="input-style"> WorkShop Url
                        <input className='input-size' onChange={onchange} type="text" name='url' value={data.url} placeholder='Zoom / Google meet Url...                                   ' />
                    </div>
                    <div className="input-style"> WorkShop Date
                        <input className='input-size' onChange={onchange} type="text" name='date' value={data.date} placeholder='dd/mm/yyyy hh:mm:ss...                                   ' />
                    </div>
                </div>
                <div className='button'>
    { !showupdate ?  <div className='btn ' type="submit" onClick={handleonClick}>Create Workshop</div> :
                    <div className='btn ' type="submit" onClick={handleonClickUpdate}>Update Workshop</div>  }
                </div>
            </form>
        </div>
    )
}

export default Createworkshop