import { Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h4>회사정보 들어있음</h4>
            <Outlet></Outlet>
        </div>
    )
}

export default About;