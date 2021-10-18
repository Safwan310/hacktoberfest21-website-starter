import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from 'react-bootstrap/Button'

const ContestantInfo = () => {
  const contestantState = useSelector(
    (state) => state.contestant.contestantInfo
  );
  const contestantId = contestantState;
  const [contestant, setContestant] = useState({});
  const [loading, setLoading] = useState(true);
  const [voteValue,setVoteValue] = useState(0);
  const baseURL = "https://pmhacktoberfest.herokuapp.com/contestants";
    //"https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants";
  useEffect(() => {
    axios
      .get(baseURL + `/${contestantId}`)
      .then((result) => {
        setContestant(result.data);
        setVoteValue(result.data["votes"])
        setLoading(false);
      })
      .catch((err) => {
        console.log("Fetching error\n" + err);
      });
  }, [voteValue]);

  const imageStyle = {
    height: "400px",
    width: "100%",
    objectFit: "cover",
  };

  const upVote = () => {
    let vote = (contestant.votes-0)+1
    axios.patch(baseURL+`/${contestantId}/upvote`,{
      "votes":`${vote}`
    }).then((result)=>{
      console.log(result.data)
      setVoteValue(vote);
    }).catch((err)=>{
      console.log("Error at upvote"+err);
    })
  }
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
                <Button variant="warning" onClick = {upVote}><KeyboardArrowUpIcon/></Button>{' '}
                <h3 className="p-3">{voteValue}</h3>
                <Button variant="warning"><KeyboardArrowDownIcon/></Button>{' '}
            </div>    
        </div>
      )}
    </Container>
  );
};

export default ContestantInfo;
