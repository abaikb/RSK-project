import React, { useState, useEffect } from "react";
import style from "./points.module.css";
import axios from "axios";

const Points = () => {

    const regions = [
        "Бишкек",
        "Чуйская область",
        "Ошская область",
        "Таласская область",
        "Нарынская область",
        "Иссык-Кульская область",
        "Джалал-Абадская область",
        "Баткенская область"
    ];
    // const [regions, setRegions] = useState([]);
    const [selectedDepartment, setSelectedDepartment] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://petshackaton.ru" // Replace with your API endpoint
                );
                // setRegions(response.data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchData();
    }, []);

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    return (
        <div className={style.container}>
            <div className={style.region}>
                {regions.map((region) => (
                    <a key={region.id}>{region.name}</a>
                ))}
            </div>
            <div className={style.dep}>
                <div className={style.depOptions}>
                    <label>
                        <input
                            type="radio"
                            value="pos"
                            checked={selectedDepartment === "pos"}
                            onChange={handleDepartmentChange}
                        />
                        POS-терминалы
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            value="atm"
                            checked={selectedDepartment === "atm"}
                            onChange={handleDepartmentChange}
                        />
                        Банкоматы
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            value="branch"
                            checked={selectedDepartment === "branch"}
                            onChange={handleDepartmentChange}
                        />
                        Отделения
                    </label>
                </div>
                <div className={style.list}>
                    <table className={style.table}>
                        <tbody>
                            {/* Render the table rows based on the fetched data */}
                            {regions.map((region) => (
                                <tr className={style.tr} key={region.id}>
                                    <td>{region.id}</td>
                                    <td>{region.name}</td>
                                    <td>{region.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Points;
