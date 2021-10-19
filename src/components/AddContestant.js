import React from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useForm,Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddContestant = () => {
  const baseURL = "https://pmhacktoberfest.herokuapp.com/contestants";
    //"https://6c841112-7c87-47ef-a956-03b6484aa343.mock.pstmn.io/contestants";

  const { control, handleSubmit } = useForm();
  let history = useHistory()
  const contestantAdder = (data) => {
        axios.post(baseURL,data).then((response) => {console.log(response.data)}).catch((err)=>console.log(err));
        history.push("/");
  };
  return (
    <Container className="p-5">
        <Form>
                <Form.Group className="mb-3">
                <Form.Label className="mx-0">Name</Form.Label>
                <Controller 
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <Form.Control {...field} />}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Costume</Form.Label>
                <Controller 
                name="costumeTitle"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <Form.Control {...field} />}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Costume Image URL</Form.Label>
                <Controller 
                name="costumeImgUrl"
                control={control}
                defaultValue=""
                rules={{ required: true , pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/}}
                render={({ field }) => <Form.Control {...field} />}/>
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Controller 
                name="city"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <Form.Control {...field} />}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Controller 
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => <Form.Control {...field} />}/>
            </Form.Group>

            <Button variant="warning" type="submit" onClick={handleSubmit(contestantAdder)}>
                Submit
            </Button>
        </Form>
    </Container>
  );
};

export default AddContestant;
