import React, {useState, useEffect} from 'react';
import axios from "axios";


function Main() {
    const [isLoading, setLoading] = useState(true);  // Флаг готовности результата axios
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/categories/").then(res => {
            setCategories(res.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }

    return (
        <div className="button">
            {categories.map((name) => (
                <a key={name.categoryType} className="category" href={`/category/${name.categoryType}`}>{name.categoryType}</a>
            ))}
        </div>
    );
}

export default Main
