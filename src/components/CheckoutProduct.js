import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Currency from "react-currency-formatter-v2"
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'


const CheckoutProduct = ({ id, title, price, rating, description, category, image, hasPrime }) => {

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id, title, price, rating, description, category, image, hasPrime
        }

        // Push item in redux
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {

        // Remove item from redux
        dispatch(removeFromBasket({ id }));
    }

    return (
        <div className="grid grid-cols-5 ">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>

                <div className="mb-5">
                    <Currency quantity={price} />
                </div>

            </div>

            {/* Right add/remove buttons */}

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>

        </div >
    )
}

export default CheckoutProduct