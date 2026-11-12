function RecipeBox({ recipe, ingredientHeadingId }) {

  const totalTime = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);

  return (
    <article className="recipe-card">
      <div className="recipe-card-topline">
        <span className="recipe-category">{recipe.category || "Recipe"}</span>
        {recipe.difficulty && (
          <span className="recipe-difficulty">{recipe.difficulty}</span>
        )}
      </div>

      <h2 className="recipe-title">{recipe.title || "Untitled recipe"}</h2>

      <ul className="recipe-meta" aria-label="Recipe details">
        {recipe.prepTimeMinutes != null && (
          <li>
            <span aria-hidden="true">◷</span> Prep {recipe.prepTimeMinutes} min
          </li>
        )}
        {recipe.cookTimeMinutes != null && (
          <li>
            <span aria-hidden="true">♨</span> Cook {recipe.cookTimeMinutes} min
          </li>
        )}
        {recipe.servings != null && (
          <li>
            <span aria-hidden="true">♡</span> Serves {recipe.servings}
          </li>
        )}
        {totalTime > 0 && <li className="recipe-total-time">{totalTime} min total</li>}
      </ul>

      {recipe.ingredients.length > 0 && (
        <section className="recipe-block" aria-labelledby={ingredientHeadingId}>
          <h3 id={ingredientHeadingId}>
            Ingredients <span>{recipe.ingredients.length}</span>
          </h3>
          <ul className="ingredient-list">
            {recipe.ingredients.map((ingredient, index) => {
              const unit = ingredient.unit || ingredient.unite || "";
              const quantity = [ingredient.amount, unit].filter(Boolean).join(" ");

              return (
                <li key={`${ingredient.name || "ingredient"}-${index}`}>
                  <span>{ingredient.name || "Ingredient"}</span>
                  {quantity && <span className="ingredient-amount">{quantity}</span>}
                </li>
              );
            })}
          </ul>
        </section>
      )}
        
      {recipe.instructions.length > 0 && (
        <details className="recipe-block instructions-block">
          <summary className="instructions-summary">
            <span>How to make it</span>
            <span className="instruction-count">
              {recipe.instructions.length} steps
            </span>
          </summary>
          <ol className="instruction-list">
            {recipe.instructions.map((instruction, index) => (
              <li key={`${index}-${instruction}`}>
                <span className="instruction-number">{index + 1}</span>
                <p>{instruction}</p>
              </li>
            ))}
          </ol>
        </details>
      )}
    </article>
  );
}

export default RecipeBox;
