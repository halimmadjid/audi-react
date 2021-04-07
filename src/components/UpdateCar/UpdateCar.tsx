import React from 'react';
import { serverCalls } from '../../api';
import { useForm } from 'react-hook-form';
import {  Container } from 'react-bootstrap';
import {useLocation} from 'react-router-dom';

type Inputs = {
    make:string,
    model:string,
    color:string,
    price:number
}

export const UpdateCar = () => {

    const location:any = useLocation();
    const {register, handleSubmit} = useForm();
    const onSubmit = (data:any) =>{
        serverCalls.update(location.state.car_id,data)
    }

    return(
        <Container>
        <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="make">Car Make</label>
                <input type="text" name="make" id="make" placeholder="Update Car Make" ref={ register }/>

                <label htmlFor="model">Car Model</label>
                <input type="text" name="model" id="model" placeholder="Update Car Model" ref={ register }/>
                
                <label htmlFor="color">Car Color</label>
                <input type="text" name="color" id="color" placeholder="Update Car Color" ref={ register }/>

                <label htmlFor="price">Car Price</label>
                <input type="text" name="price" id="price" placeholder="Update Car Price" ref={ register }/>
                
                <button type="submit" className ="button-styles">Update Car!</button>
        </form>
        </div>
        </Container>
    )
}
