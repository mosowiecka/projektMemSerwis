import { NavLink, Routes, Route } from "react-router-dom";
import styles from "./index.module.css";
import { Memlist } from "./memBase";

export const Service = () => {

    return (

        <div>
            <div className={styles.NavBar}>

                <div className={styles.NavLink}>
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? '#e5e5e5' : '#b2b2b2',
                        fontSize: isActive ? '25px':'18px',
                        fontWeight: isActive ? '900' : '600',
                    })}
                        to="/regular">Regular</NavLink>
                </div>

                <div className={styles.NavLink}>
                    <NavLink style={({ isActive }) => ({
                        color: isActive ? '#e5e5e5' : '#b2b2b2',
                         fontSize: isActive ? '25px':'18px',
                        fontWeight: isActive ? '900' : '600',
                    })}
                        to="/hot">Hot</NavLink>
                </div>
            </div>

            <Routes>
                <Route path="/regular" element={<Memlist page='regular' />} />
                <Route path="/hot" element={<Memlist page='hot' />} />
            </Routes>
        </div>
    );
};

