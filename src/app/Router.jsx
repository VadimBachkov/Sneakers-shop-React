import { Route, Routes } from 'react-router-dom'

import { Home, Posts, Profile } from 'pages'
import { ROUTES } from 'shared/consts'

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.POSTS} element={<Posts />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
        </Routes>
    )
}

export default Router