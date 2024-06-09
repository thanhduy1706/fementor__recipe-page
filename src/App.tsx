import Recipe from "./components/Recipe";
import { recipe } from './lib/data';

export default function App() {
  return (
    <div className="py-0 sm:py-24 bg-eggshell">
      <Recipe recipe={recipe} />
    </div>
  );
}
