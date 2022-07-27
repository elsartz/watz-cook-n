import React from "react";

const recipeCard = ({recipe}) => {

    return (

        <div className='recipe'>
            <div>
                <p>{recipe.Name}</p>
            </div>

            <div>
                <img src={recipe.Image} />
            </div>

            <div>
                <span>{recipe}</span>
                <h3>{recipe.Name}</h3>
            </div>
        </div>
    )
}

export default recipeCard;