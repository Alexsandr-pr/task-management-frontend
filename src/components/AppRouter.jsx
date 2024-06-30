import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../route'
import Layout from './Layout'
import DetailTask from '@/pages/DetailTask'
import Chat from './chat/Chat'
import Message from '@/pages/Message'

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
                <Route path={`task/1`}  element={<DetailTask/>} />
                <Route path="message/*" element={<Message />}>
                    <Route path=":id" element={<Chat />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter