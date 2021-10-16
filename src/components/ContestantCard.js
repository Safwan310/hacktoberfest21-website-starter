import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { updateInfo } from '../reducers/contestantState';

const ContestantCard = ({image,name,dress,id}) => {
    const dispatch = useDispatch();

    const imageStyle = { 
        height:'400px',
        width:'100%',
        objectFit:'cover',
    }

    return (
            <div className = "card rounded shadow">
            <div>
                <img src={image} style = {imageStyle} alt="" />
            </div>
            <div className = "card-body">
                <h4 className = "card-title">
                    {name}
                </h4>
                <p className = "card-body">
                    {dress}<br/>
                    
                </p>
                <div className="d-flex justify-content-end">
                    <Link to = {`/${id}`}
                    variant="warning"
                    className = "text-decoration-none bg-warning p-2 rounded text-black"
                    onClick = {()=>dispatch(updateInfo(id))}>See Contestant</Link>
                </div>
            </div>
        </div>
    )
}

export default ContestantCard
