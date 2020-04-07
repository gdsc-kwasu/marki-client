import React from 'react' 
import Background from '../components/Background'


const Notfound = () => {
    return (
        <div className="container">
            <Background />
            <div className="error-description">
                <h3 className="text-primary">
                    Error 404! The page you are looking for doesn't exists &#x1F627;
                </h3>
            </div>
        </div>    
    )
}

export default Notfound