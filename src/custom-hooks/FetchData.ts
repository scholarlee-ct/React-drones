import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [droneData, setData] = useState<any>([]);

    const handleFetchData = async() => {
        const result = await server_calls.get();
        setData(result)
    }

    //introducing the useeffect hook to add data to react state... only do one time if it has empty array at end
    useEffect( () => {
        handleFetchData();
    }, [])

    return {droneData, getData:handleFetchData}
}