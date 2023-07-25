import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Username,Profile,Reset,Recovery,Register, PageNotFound, Password } from './components';

/** root routes **/
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}