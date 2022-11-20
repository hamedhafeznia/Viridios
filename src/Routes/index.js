import { Routes, Route  } from 'react-router-dom';
import PageOne from '../components/pageOne'

export const RoutesWrraper = () => {
    return (
        <Routes>
            <Route  path="/one" element={<PageOne />} />
            {/* not found 404 */}
            {/* <Route path="*" component="" /> */}
        </Routes>
    )
}