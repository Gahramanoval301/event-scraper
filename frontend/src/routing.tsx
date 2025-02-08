import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"


const WebRouting = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default WebRouting