// import React from "react";
// import { MenuIcon } from "@heroicons/react/outline";
// import { Link } from "@inertiajs/inertia-react";
// import { Popover } from "@headlessui/react";

// const Navbar = ({ navigation }) => {
//     return (
//         <nav
//             className="relative flex items-center justify-between sm:h-10 lg:justify-start"
//             aria-label="Global"
//         >
//             <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
//                 <div className="flex items-center justify-between w-full md:w-auto">
//                     <Link href="/">
//                         <span className="sr-only">Konstant Mining Tool</span>
//                         <img
//                             className="h-8 w-auto sm:h-10"
//                             src="/img/constant.png"
//                         />
//                     </Link>
//                     <div className="-mr-2 flex items-center md:hidden">
//                         <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
//                             <span className="sr-only">Open main menu</span>
//                             <MenuIcon className="h-6 w-6" aria-hidden="true" />
//                         </Popover.Button>
//                     </div>
//                 </div>
//             </div>
//             <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
//                 {navigation.map((item) => (
//                     <a
//                         key={item.name}
//                         href={item.href}
//                         className="font-medium text-gray-500 hover:text-gray-900"
//                     >
//                         {item.name}
//                     </a>
//                 ))}
//                 <Link
//                     href={route("login")}
//                     className="font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                     Log in
//                 </Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "@inertiajs/inertia-react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example(props) {
    const { auth, navigation } = props;
    return (
        <Disclosure
            as="nav"
            className=""
            style={{
                position: "fixed",
                top: 0,
                bottom: "auto",
                right: 0,
                left: 0,
                width: "100%",
                zIndex: 9999,
                backgroundColor: "white",
            }}
        >
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link href="/">
                                        <img
                                            className="block lg:hidden h-8 w-auto"
                                            src="/img/constant.png"
                                            alt="Konstant"
                                        />
                                    </Link>
                                    <Link href="/">
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src="/img/constant.png"
                                            alt="Konstant"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-7">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="font-medium text-gray-500 hover:text-gray-900"
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {auth.user ? (
                                    <Link
                                        href="/dashboard"
                                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-blue-100"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <Link
                                        href="/login"
                                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-blue-100"
                                    >
                                        Log in
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
