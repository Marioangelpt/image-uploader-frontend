import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import PreviewRoute from "./Routes/PreviewRoute"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>}/>
      <Route path='/:name' element={<PreviewRoute/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
