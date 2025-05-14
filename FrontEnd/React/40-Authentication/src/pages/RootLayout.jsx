import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function RootLayout() {
    const navigation=useNavigation();
    return (
        <>
            <MainNavigation />
            <main>
                {navigation.state==='loading' && <p>loading...</p>}
                <Outlet />
            </main>
        </>
    );
}
