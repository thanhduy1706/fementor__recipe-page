interface IngredientProps {
  ingredient: {
    id: string;
    name: string;
    amount: string;
  }[];
  optionalIngredient: string[];
}

const Ingredient = ({
  ingredient,
  optionalIngredient,
}: IngredientProps) => {
  return (
    <div className="border-b-[1px] border-light-grey pb-8">
      <h2 className="mb-6 text-3xl font-young-serif text-nutmeg">Ingredients</h2>

      <ul className="pl-6 space-y-2 list-disc">
        {ingredient.map((ing) => (
          <li key={ing.id} className="pl-4 marker:text-nutmeg">
           {ing.name} | {ing.amount}
          </li>
        ))}
        {optionalIngredient.length > 0 && (
          <li className="pl-4">
            Optional fillings: {optionalIngredient.join(", ")}
          </li>
        )}
      </ul>
    </div>
  );
}
export default Ingredient;
