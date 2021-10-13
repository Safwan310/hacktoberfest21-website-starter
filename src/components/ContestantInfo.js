import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'


const ContestantInfo = () => {
    const contestantState = useSelector((state)=>state.contestant.contestantInfo);
    const contestantId = contestantState;
    const [contestant,setContestant] = useState({});
    const baseURL = "https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants";
    useEffect(() => {
            axios.get(baseURL+`/${contestantId}`).then((result) => {
                setContestant(result.data);
            }).catch((err) => {
                console.log("Fetching error\n"+err);
            });
    },[])
    
    return (
        <div className="p-5">
            {contestant ? <h1>{contestant.name}</h1> : <Spinner
            animation="border"
            role="status"
            ></Spinner>}
            
        </div>
    )
}

export default ContestantInfo
