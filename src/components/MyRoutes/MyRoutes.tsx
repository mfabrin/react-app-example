import { Routes, Route, Navigate } from 'react-router-dom'

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { Plants, Error404 } from 'views'
import { Login } from 'views/Account'

let Navigations = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute children={<Plants />} />} />
            <Route path="/plants" element={<PrivateRoute children={<Plants />} />} />

            <Route path="/account/login" element={<PublicRoute children={<Login />} />} />

            <Route path="/error404" element={<PrivateRoute children={<Error404 />} />} />

            <Route path="*" element={<PrivateRoute children={<Navigate to="/error404" />} />} />
        </Routes>
    )
}

export default Navigations;