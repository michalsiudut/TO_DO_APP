import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2 bg-[#242424]">
                <Link to="/" className="[&.active]:font-bold text-white">
                    TODO
                </Link>{' '}
                <Link to="/timer" className="[&.active]:font-bold text-white">
                    Timer
                </Link>
                <Link to="/form" className="[&.active]:font-bold text-white">
                    Form
                </Link>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    ),
})