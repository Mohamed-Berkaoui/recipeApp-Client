import DisplayRecipes from "./(components)/DisplayRecipes";
import AddRecipe from "./(components)/AddRecipe";

export default function Home() {
  return (
    <>
      <AddRecipe />
      <DisplayRecipes />
    </>
  );
}
