import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const Graph = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        //OLD METHOD
        /*fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => console.log(data))*/

        //NEW METHOD
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {

                //splitting an object element into two elements
                const phoneData = data.data.data.map(phone => {
                    const parts = phone.slug.split('-')
                    const price = parseInt(parts[1])
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo
                })
                console.log(phoneData)
                setPhones(phoneData)
            })
    }, [])
    return (
        <div style={{ width: "50%", height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={1000} height={500} data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graph;