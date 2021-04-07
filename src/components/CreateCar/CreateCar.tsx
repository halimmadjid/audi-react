import React from 'react';
import { serverCalls } from '../../api';
import { useForm } from 'react-hook-form';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs ={
    make: string,
    model: string,
    color: string,
    price: number
}

export const CreateCar = (props:any) =>{

    const {register, handleSubmit} = useForm<Inputs>();

    const onSubmit = (data:any) =>{
        console.log(data)
        serverCalls.create(data)
    }


    return (
        <Container>
        <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="name">Car Make</label>
                <input type="text" name="make" id="make" placeholder="Add Car Make" ref={ register }/>

                <label htmlFor="model">Car Model</label>
                <input type="text" name="model" id="model" placeholder="Add Car Model" ref={ register }/>
                
                <label htmlFor="model">Car Color</label>
                <input type="text" name="color" id="color" placeholder="Add Car Color" ref={ register }/>

                <label htmlFor="price">Car Price</label>
                <input type="text" name="price" id="price" placeholder="Add Car Price" ref={ register }/>
                
                <button type="submit" className ="button-styles">Create Car!</button>
        </form>
        </Container>
    )
}

