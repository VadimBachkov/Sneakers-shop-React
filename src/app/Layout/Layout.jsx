import { Children } from "react";
import { Header } from "widgets";

function Layout() {
    return (
        <div>
            <Header>
                {Children}
            </Header>
        </div>
    );
}

export default Layout;