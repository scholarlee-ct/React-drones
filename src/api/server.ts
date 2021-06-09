import React from 'react';

let token = 'ec6cd644939fa4efeaeb41657b93f32dc2c7b9c4b5c3733c';

export const server_calls = {
    get: async() => {
        const response = await fetch(`https://drone-inventory-ml.herokuapp.com/api/drones`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from server: ' + response)
        }
        return await response.json()
    },

    create: async(data:any = {}) => {
        const response = await fetch(`https://drone-inventory-ml.herokuapp.com/api/drones`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('failed to post new data to server: ' + response)
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://drone-inventory-ml.herokuapp.com/api/drones/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok) {
            throw new Error('failed to update data to server: ' + response)
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`https://drone-inventory-ml.herokuapp.com/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        // if(!response.ok) {
        //      throw new Error('failed to delete data: ' + response)
        // }
    }
}