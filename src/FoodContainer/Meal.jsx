/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Meal = (props) => {
    const { strMealThumb, strMeal, strCategory } = props.meal
    const orderHandelEvent = props.orderHandelEvent

    return (
        <div>
            <div key='' className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                    src={strMealThumb}
                        alt=''
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-700">
                            {strMeal}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500"></p>
                    </div>
                <p className="text-sm font-medium text-gray-900">{strCategory}</p>
                </div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5"
                    onClick={() => { orderHandelEvent(props.meal) }}>
                    Order Now <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Meal;