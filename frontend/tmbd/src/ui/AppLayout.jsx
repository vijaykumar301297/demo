import Api from "../api/Api";
import Header from "./Header";

export default function AppLayout() {
    return (
        <div className="container">
            <div className="wrapper">
                <Header />
                <Api />
            </div>
        </div>
    )
}
