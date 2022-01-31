import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    const fetchMeal = async () => {
      const mealRes = await fetch(
        "https://meals-c3616-default-rtdb.firebaseio.com/meals.json"
      );

      if (!mealRes.ok) {
        throw new Error("Failed to Load the Menu");
      }

      const mealData = await mealRes.json();

      const loadedMeals = [];

      for (const key in mealData) {
        loadedMeals.push({
          id: key,
          name: mealData[key].name,
          description: mealData[key].description,
          price: mealData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeal().catch((error) => {
      setIsLoading(false);
      setHasError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealloading}>
        <p>The Menu is Loading...</p>
      </section>
    );
  }

  if (hasError) {
    return (
      <section className={classes.mealloadingerr}>
        <p>{hasError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
