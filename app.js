
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './component/pages/Homepage'
import Login from './Loginpage/Login'
function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Homepage/>}/>
        </Routes>
        </BrowserRouter>
    )
}