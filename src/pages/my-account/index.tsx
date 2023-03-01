import Header from "../../store-module/layouts/header";
import NotLogined from "../../store-module/layouts/not-logined";
import Logined from "../../store-module/layouts/logined";

const Login = () => {
    return (
        <>
            <Header />
            <NotLogined />
            <Logined />
        </>
    )
}

export default Login;