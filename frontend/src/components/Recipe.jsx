import React, {useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

function Recipe() {

    const id = useParams().id;
    const [isLoading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipe/${id}`).then(res => {
            setRecipe(res.data);
            setLoading(false);
        });
    }, [id]);


    if (isLoading) {
        return <h1>Загрузка...</h1>;
    }
    return (
        <main>
            <h1>{recipe.name}:</h1>
            <div className='recipe'>
                {recipe.recipe}
            </div>
        </main>
    );
};

export default Recipe;