import { NavLink, Routes, Route } from "react-router-dom";
import styles from "./index.module.css";
import { Memlist } from "./memBase";


export const Service = () => {
    return (

        <div>
            <div className={styles.NavBar}>
                <div className={styles.NavLink}>
                    <NavLink to="/regular">Regular</NavLink>
                </div>
                <div className={styles.NavLink}>
                    <NavLink to="/hot">Hot</NavLink>
                </div>
            </div>

            <Routes>
                <Route path="/regular" element={<Memlist page='regular' />} />
                <Route path="/hot" element={<Memlist page='hot' />} />
            </Routes>
        </div>
    );
};