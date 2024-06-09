import Container from "./Container";
import Content from "./Content";
import HeaderImg from "./HeaderImg";
import Preparation from "./Preparation";
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";
import Nutrition from "./Nutrition";
import Attribute from "./Attribute";

interface RecipeProps {
  recipe: {
    preparationTime: {
      total: string;
      preparation: string;
      cooking: string;
    };
    ingredient: {
      id: string;
      name: string;
      amount: string;
    }[];
    optional: string[];
    instruction: {
      id: string;
      title: string;
      body: string;
    }[];
    nutrition: {
      id: string;
      name: string;
      amount: string;
    }[];
  };
}

const Recipe = ({ recipe }: RecipeProps) => {
    return (
    <Container>
      <HeaderImg />
      <Content>
        <h1 className="mb-6 text-3xl font-700 font-young-serif text-dark-charcoal sm:text-4xl sm:font-600">
          Simple Omelette Recipe
        </h1>
        <p className="mb-8 leading-6">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <Preparation data={recipe.preparationTime} />
        <Ingredient
          ingredient={recipe.ingredient}
          optionalIngredient={recipe.optional}
        />
        <Instruction instruction={recipe.instruction} />
        <Nutrition nutrition={recipe.nutrition} />
      </Content>
      <Attribute/>
    </Container>
  );
}
export default Recipe;
