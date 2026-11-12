
import RecipeBox from "./RecipeBox";

async function DisplayRecipes() {
    let recipes = [];
    let loadError = false;

    try {
        const response = await fetch(
           "http://localhost:3000/api/v1/recipes",
            { cache: "no-store" },
        );

        if (!response.ok) {
            throw new Error(`Recipes request failed with status ${response.status}`);
        }

        const data = await response.json();
        recipes = data.data
    } catch {
        loadError = true;
    }

    return (
        <main className="recipes-section">
            <header className="recipes-heading">
                <p className="recipes-eyebrow">A little inspiration</p>
                <h1>Recipes worth slowing down for</h1>
                <p className="recipes-intro">
                    Simple ideas, thoughtful ingredients, and something delicious for
                    every part of your day.
                </p>
            </header>

            {loadError ? (
                <p className="recipes-message" role="status">
                    We couldn’t load the recipes right now. Please try again in a moment.
                </p>
            ) : recipes.length === 0 ? (
                <p className="recipes-message" role="status">
                    No recipes yet. Check back soon for something delicious.
                </p>
            ) : (
                <div className="recipes-grid">
                    {recipes.map((recipe, index) => (
                        <RecipeBox
                            key={recipe._id || recipe.id || `${recipe.title}-${index}`}
                            recipe={recipe}
                            ingredientHeadingId={`ingredients-${recipe._id || recipe.id || index}`}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}

export default DisplayRecipes;