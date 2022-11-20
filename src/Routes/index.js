import { Routes, Route  } from 'react-router-dom';
import SDGSInfo from 'components/SDGSInfo'

export const RoutesWrraper = () => {
    return (
        <Routes>
            <Route path="/" element={<SDGSInfo />} />
            <Route path="/sdgs" element={<SDGSInfo />} />
            <Route path="/markdown" />
            <Route path="/carbonintensity" />
        </Routes>
    )
}