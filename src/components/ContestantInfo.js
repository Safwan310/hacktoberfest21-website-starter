import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import Button from 'react-bootstrap/Button'
import { Form, Modal } from "react-bootstrap";
import { Controller,useForm } from "react-hook-form";

const ContestantInfo = () => {
  const contestantState = useSelector(
    (state) => state.contestant.contestantInfo
  );
  const contestantId = contestantState;
  const [contestant, setContestant] = useState({});
  const [loading, setLoading] = useState(true);
  const [voteValue,setVoteValue] = useState(0);
  const [upVoted,setUpVoted] = useState(false);
  const [edited,setEdited] = useState(false);
  const baseURL = "https://pmhacktoberfest.herokuapp.com/contestants";
    //"https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants";
  useEffect(() => {
    axios
      .get(baseURL + `/${contestantId}`)
      .then((result) => {
        setContestant(result.data);
        setVoteValue(result.data["votes"])
        setLoading(false);
        if(localStorage.getItem(contestantId)!==null){
            setUpVoted(true);
        }
      })
      .catch((err) => {
        console.log("Fetching error\n" + err);
      });
  }, [upVoted,contestantId,edited]);

  const imageStyle = {
    height: "400px",
    width: "100%",
    objectFit: "cover",
  };

  const upVote = () => {

    let vote = (contestant.votes-0)+1
    if(!upVoted){
      axios.patch(baseURL+`/${contestantId}/upvote`,{
        "votes":`${vote}`
      }).then((result)=>{
        console.log(result.data)
        setVoteValue(vote);
        setUpVoted(true);
        localStorage.setItem(contestant.id,true);
      }).catch((err)=>{
        console.log("Error at upvote"+err);
      })
    }
    else{
      
    }
  }

  const nameEditor = (data)=> {
    axios
    .patch(baseURL+ `/${contestantId}`,data)
    .then((response)=>{
      console.log(response.data);
      setShow(false);
      setEdited(true);
    })
    .catch((err)=>console.log(err));
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { control, handleSubmit } = useForm();

  return (
    <Container className="p-5">
      {loading ? (
        <Spinner
          animation="border"
          role="status"
          variant="warning"
          className="mt-auto"
        ></Spinner>
      ) : (
        <div className = "d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div><img src={contestant.costumeImgUrl} alt="" style={imageStyle}/></div>
            <div className="d-flex flex-column justify-content-end">
                <h3 align="left">Name: {contestant.name}</h3>
                <h3 align="left">Costume: {contestant.costumeTitle}</h3>
                <h3 align="left">Country: {contestant.country}</h3>
                <h3 align="left">City: {contestant.city}</h3>
            </div>
            <div className="d-flex flex-row flex-md-column">
                <Button variant={upVoted?"warning":""} className="border border-warning" onClick = {upVote}><KeyboardArrowUpIcon/></Button>{' '}
                <h3 className="p-3">{voteValue}</h3>
                <Button variant="" onClick={handleShow}>🎃</Button>
            </div>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Edit Contestant Name</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="mx-0">New Name</Form.Label>
                  <Controller 
                  name="name"
                  control={control}
                  defaultValue={contestant.name}
                  rules={{ required: true }}
                  render={({ field }) => <Form.Control {...field} />}/>
                </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="warning" onClick={handleSubmit(nameEditor)}><EditIcon/> Edit Name</Button>
              </Modal.Footer>
            </Modal>   
        </div>
      )}
    </Container>
  );
};

export default ContestantInfo;
