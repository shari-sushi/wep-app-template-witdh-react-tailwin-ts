import { Outlet, Link } from "react-router-dom";
import { ROUTES, ROUTE_NAMES } from "@/router/types";

export default function Layout() {
  return (
    <div className="min-h-screen bg-primary-hanten-dark">
      <nav className="shadow-sm border-b">
        <div className="max-w-7xl mx-auto pr-4 sm:pr-6 bg-[#252525">
          <div className="flex justify-between h-8">
            <div className="flex items-center">
              <Link to={ROUTES.HOME} className="bg-primary-shirt text-xl font-bold text-gray-800 px-6 rounded-br-full">
                Title
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link to={ROUTES.HOME} className="bg-primary-raccoon-ear-tip  text-gray-200 hover:text-gray-200 px-3 py-1 rounded-md text-sm font-medium">
                {ROUTE_NAMES.HOME}
              </Link>
              <Link to={ROUTES.TOP} className="bg-primary-raccoon-ear-tip text-gray-200 hover:text-gray-200 px-3 py-1 rounded-md text-sm font-medium">
                {ROUTE_NAMES.TOP}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
