import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from 'react-bootstrap/Button'
import Spinner from "react-bootstrap/Spinner";

const DeleteContestant = () => {
    const baseURL = "https://pmhacktoberfest.herokuapp.com/contestants";

    const [contestants, setContestants] = useState([]);
    const [loading,setLoading] = useState(true);
    const [deleted,setDeleted] = useState(false);
    useEffect(() => {
        axios.get(baseURL)
        .then((response) =>{
            setContestants(response.data);
            setLoading(false);
            setDeleted(false);
        })
        .catch((error) => {console.log(error);})
    }, [deleted])

    let handleDelete = (id)=>{
        axios.delete(`${baseURL}/${id}`).then((response) =>{
            console.log(response.data);
            setDeleted(true);
        }).catch((error) => {console.log(error)});
    }

    let contestantList = contestants.map((contestant)=>{
        return (
            <div className="rounded shadow d-flex justify-content-between p-2 p-md-5" key={contestant.id}>
                <div>
                    <h3 className="text-start">{contestant.name}</h3>
                    <h4 className="text-start">{contestant.city},{contestant.country}</h4>
                </div>
                <Button variant="warning" onClick = {()=>{handleDelete(contestant.id)}}><DeleteOutlineIcon/></Button>
            </div>
        )
    })
    return (
        <Container className="p-2 p-md-5">
            {loading ? (
                <Spinner
            animation="border"
            role="status"
            variant="warning"
            className="mt-auto"
            ></Spinner>
            ):<div>{contestantList}</div>}
           
        </Container>
    )
}

export default DeleteContestant
