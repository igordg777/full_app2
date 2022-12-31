import React, { useState, useEffect } from 'react';

function GetUsers() {

    const usersFetch = () => {
        fetch('http://localhost:5000/getusers')
            .then(res => res.json())
            .then(res => console.log(res))
    }

    return (
        <>
            <button onClick={() => usersFetch()}>Получить пользователей</button>
        </>
    )
}

export default GetUsers