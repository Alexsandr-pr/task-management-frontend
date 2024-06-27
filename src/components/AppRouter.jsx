import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../route'
import Layout from './Layout'

const AppRouter = () => {
    return (
        <Routes>
            <Route  path="/" element={<Layout />}>
                {
                    publicRoutes.map((item) => {
                        return (
                            <Route key={item.path} path={item.path}  element={<item.Component/>} exact/>
                        )
                    })
                }
            </Route>
        </Routes>
    )
}

export default AppRouter