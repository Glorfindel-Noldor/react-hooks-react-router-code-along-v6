import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const exapmpleOf = [
    {
        path: '/',
        element: <Home />,    
        errorElement: <ErrorPage/>,
    },
    {
        path: '/about',
        element: <About/>,
        errorElement: <ErrorPage/>,
    },
    {
        path:'/login',
        element: <Login/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/profile/:id',
        element: <UserProfile/>,
        errorElement: <ErrorPage/>,
    },
]

export default exapmpleOf
