import Header from "../components/Header"
import CheckoutProduct from "../components/CheckoutProduct"
import Currency from "react-currency-formatter-v2"
import Image from "next/image"
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSession } from "next-auth/client"
const stripePromise = loadStripe(process.env.stripe_public_key)

const Checkout = () => {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();

    const createCheckoutSession = () => {
        const stripe = await stripePromise;

        // Call the backend to create a session
    }

    return (
        <div className="bg-shades h-screen">
            <Header />

            <main className="lg:flex max-w-screen-2xl mx-auto ">
                {/* left  */}
                <div className="flex-grow m-5 shadow-sm ">
                    <div className="flex flex-col p-5 space-y-10 bg-shades-light text-white">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ? "You Bliss Basket is empty." : "Shopping Basket"}
                        </h1>

                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                hasPrime={item.hasPrime}
                            />
                        ))}

                    </div>


                </div>

                {/* right */}
                <div className="flex flex-col bg-shades text-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal ({items.length} items):{" "}
                                <span className="font-bold">
                                    <Currency quantity={total} />
                                </span>
                            </h2>
                            <button
                                role="link"
                                onClick={createCheckoutSession}
                                disabled={!session} className={`button mt-2 ${!session && "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </>
                    )}
                </div>

            </main>

        </div>
    )
}

export default Checkout
