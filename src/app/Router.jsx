import { Route, Routes } from 'react-router-dom'

import { Home, Registration, Profile, ShoppingCart, Favorites } from 'pages'
import { ROUTES } from 'shared/consts'

function Router() {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
            <Route path={ROUTES.SHOPPINGCART} element={<ShoppingCart />} />
            <Route path={ROUTES.SHOPPINGCART} element={<ShoppingCart />} />
            <Route path={ROUTES.FAVORITES} element={<Favorites />} />
        </Routes>
    )
}

export default Router