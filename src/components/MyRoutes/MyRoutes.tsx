import Layout from 'components/Layout';
import { Routes, Route } from 'react-router-dom'

import { Homepage, Plants, Error404 } from 'views'

let Navigations = () => {
    return (
        <Routes>
            <Route path="/"
                element={
                    <Layout>
                        <Homepage />
                    </Layout>
                }
            />

            <Route path="/plants"
                element={
                    <Layout>
                        <Plants />
                    </Layout>
                }
            />

            <Route path="error404"
                element={
                    <Layout>
                        <Error404 />
                    </Layout>
                } />
        </Routes>
    )
}

export default Navigations;