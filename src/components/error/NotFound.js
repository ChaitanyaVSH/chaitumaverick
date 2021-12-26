import React from 'react';

const NotFound = () => {
    return (
        <div style={{
            textAlign: "center",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            <h1>The page you are looking does not exist...</h1>
            <p>Good to see you trying different routes from the URL, We logged it 😛</p>
        </div>
    )
}

export default NotFound;
