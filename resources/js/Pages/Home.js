import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";

const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Features", href: "/features", current: false },
    { name: "Miners", href: "/miners", current: false },
    { name: "Calculator", href: "/profit/calculator", current: false },
];

export default function Home(props) {
    const { auth } = props;
    return (
        <>
            <Head title="Konstant | BTC Mining For Everyone" />
            <Popover>
                <div className="relative p-5">
                    <Navbar navigation={navigation} auth={auth}></Navbar>
                </div>
            </Popover>
            <div
                className="relative overflow-hidden"
                style={{
                    backgroundImage: "url('/img/btc.jpg')",
                    backgroundSize: "cover",
                    color: "white",
                }}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <Popover>
                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="px-5 pt-4 flex items-center justify-between">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="/img/constant.png"
                                                    alt="Konstant"
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">
                                                        Close main menu
                                                    </span>
                                                    <XIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        <div className="px-2 pt-2 pb-3 space-y-1">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                        {auth.user ? (
                                            <Link
                                                href="/dashboard"
                                                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                            >
                                                Dashboard
                                            </Link>
                                        ) : (
                                            <Link
                                                href="/login"
                                                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                                            >
                                                Log in
                                            </Link>
                                        )}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-white-500 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">
                                        Konstant Mines
                                    </span>{" "}
                                    <span className="block text-yellow-100 xl:inline">
                                        Cryptocurrency
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-white-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                    We combine the processing power of thousands
                                    of computers to run complex distributed
                                    cryptocurrency computations. Mining
                                    cryptocurrency is hard. We've made things
                                    amazingly simple: just let Konstant work in
                                    the background and we will pay you for the
                                    work your computer does.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link
                                            href={route("register")}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <Link
                                            href={route("login")}
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                        >
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    {/* <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt=""
                    /> */}
                </div>
            </div>
        </>
    );
}
