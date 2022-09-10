import App from 'App';
import { Routes, Route } from 'react-router-dom'

import { Homepage, Error404 } from 'views'

let Navigations = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="error404" element={<Error404 />} />
        </Routes>
    )
}

export default Navigations;