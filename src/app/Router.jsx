import { Route, Routes } from 'react-router-dom'

import { Home, Registration, Profile, ShoppingCart } from 'pages'
import { ROUTES } from 'shared/consts'

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.SHOPPINGCART} element={<ShoppingCart />} />
        </Routes>
    )
}

export default Router