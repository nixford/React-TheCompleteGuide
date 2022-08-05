import { useEffect, useState } from "react";

import Card from "../../UI-General/Card/Card";
import MealItem from "../MealItem/MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://foodapp-13bc4-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  const mealsList = meals.map((m) => (
    <MealItem
      key={m.id}
      id={m.id}
      name={m.name}
      description={m.description}
      price={m.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && !httpError && <ul>{mealsList}</ul>}
        {isLoading && !httpError && (
          <p className={classes["loading-message"]}>Loading... {httpError}</p>
        )}
        {!isLoading && httpError && (
          <p className={classes["error-message"]}>{httpError}</p>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
