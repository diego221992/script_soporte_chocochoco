import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { DataProvider } from './context/UserContext.jsx';
import '../src/assets/css/App.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
   // <StrictMode>
   <BrowserRouter>
      <DataProvider>
         <App />
      </DataProvider>
   </BrowserRouter>
   // </StrictMode>,
)
