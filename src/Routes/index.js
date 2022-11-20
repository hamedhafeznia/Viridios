import { Routes, Route  } from 'react-router-dom';
import SDGSInfo from 'components/SDGSInfo'

export const RoutesWrraper = () => {
    return (
        <Routes>
            <Route path="/sdgs" element={<SDGSInfo />} />
            <Route path="/markdown" element={<SDGSInfo />} />
            <Route path="/carbonintensity" element={<SDGSInfo />} />
        </Routes>
    )
}