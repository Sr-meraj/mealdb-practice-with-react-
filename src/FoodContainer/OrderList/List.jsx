/* eslint-disable react/prop-types */

const List = ({ meal }) => {
    return (
        <li className="font-semibold text-xl py-1">
            {meal.strMeal}
        </li>
    );
};

export default List;