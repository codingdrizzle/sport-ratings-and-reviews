
const dotenv = () => {
    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config()
    }
} 

export {dotenv}
