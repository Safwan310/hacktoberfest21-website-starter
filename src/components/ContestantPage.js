import React,{useEffect, useState} from 'react'
import axios from 'axios';
import ContestantCard from './ContestantCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const baseURL = "https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants";
const ContestantPage = () => {
    const [contestants, setContestants] = useState([])
    useEffect(() => {
        axios.get(baseURL).then((result) => {
            setContestants(result.data);
        }).catch((err) => {
            console.log("Fetching error\n"+err);
        });
    }, [])
    let cards = contestants.map((contestant)=>{
        return (
            <Col className = "p-3" key = {contestant.id}>
                <ContestantCard 
                image = {contestant.costumeImgUrl}
                name = {contestant.name}
                dress = {contestant.costumeTitle}
                id = {contestant.id}>
                </ContestantCard>
            </Col>
            )
    })
    return (      
            <Container className = "mt-3 p-2">
                <Row xs={1} md={3}>
                    
                        {cards}
                    
                </Row>    
            </Container>
    )
}

export default ContestantPage
