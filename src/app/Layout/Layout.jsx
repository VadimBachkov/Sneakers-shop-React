import React from "react";
import { Header , Footer} from "widgets";

function Layout({children}) {
    return (
        <div>
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default Layout;