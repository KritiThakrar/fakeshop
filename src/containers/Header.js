import React from 'react'

const Header = () =>
{
    return (
        <nav className="bg-white-800 shadow-lg">
            <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <a href="#" className="px-3 py-2 text-3xl font-bold">FakeShop</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 shadow-lg">
                    <a href="#" className="block px-3 py-2 text-3xl font-bold">FakeShop</a>
                </div>
            </div>
        </nav>

    )
}

export default Header;
