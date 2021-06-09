import React from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface DroneFormProps {
    id?: string;
    data?:{};
}

interface DroneState { 
    name: string;
    price:string;
}


export const DroneForm = (props: DroneFormProps) => {
    const dispatch = useDispatch();
    let { droneData, getData } = useGetData();
    const store = useStore();
    const name = useSelector<DroneState>(state => state.name)
    const {register, handleSubmit } = useForm({})

    const onSubmit = (data: any, event:any) => {
        if(props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            // window.location.reload()
            // event.target.reset()
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            console.log('this is the else', store.getState())
            // window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Drone Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="cam_quality">Camera Quality</label>
                    <Input {...register('cam_quality')} name="cam_quality" placeholder="Camera Quality"/>
                </div>
                <div>
                    <label htmlFor="flight_time">Flight Time</label>
                    <Input {...register('flight_time')} name="flight_time" placeholder="Flight Time"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="dimensions">Dimensions</label>
                    <Input {...register('dimensions')} name="dimensions" placeholder="Dimensions"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Max Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Max Speed"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <div>
                    <label htmlFor="cost_of_prod">Cost Of Production</label>
                    <Input {...register('cost_of_prod')} name="cost_of_prod" placeholder="Cost Of Production"/>
                </div>
                <div>
                    <label htmlFor="series">Series</label>
                    <Input {...register('series')} name="series" placeholder="Series"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}