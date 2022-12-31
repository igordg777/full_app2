import React, { useState, useEffect } from 'react';

function GetUsers() {

    const usersFetch = () => {
        alert('usersFetch work!')
    }

    return (
        <>
            <button onClick={() => usersFetch()}>Получить пользователей</button>
        </>
    )
}

export default GetUsers