import { useEffect, useState } from "react";
import Meal from "./meal";
import List from "./OrderList/List";

const Mealdb = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a').then(res => res.json()).then(data => setMeals(data.meals))
    }, [])
    const orderHandelEvent = (meal) => {
        const newMeal = [...orders, meal];
        // console.log(orders);
        setOrder(newMeal)
    }
    return (
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8 grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {
                        meals.map(meal => <Meal meal={meal} key={meal.idMeal} orderHandelEvent={orderHandelEvent} />)
                    }
                </div>
            </div>
            <div className="w-ful">
                <div className="rounded-xl bg-indigo-500 px-8 py-8 min-h-0 h-auto">
                    <h3 className="text-4xl text-gray-50 font-bold text-center py-3">Ordered LIst</h3>
                    <hr className="my-2 h-0.5 border-t-0 bg-gray-50 opacity-100 dark:opacity-50" />
                    <div className="srm">
                        <ol className="pl-5 mt-2 space-y-1 text-gray-100 list-decimal list-inside">
                            {
                                orders.map((li, i) => <List meal={li} key={i} />)
                            }
                        </ol>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Mealdb;