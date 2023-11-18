import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import Loading from './Loading';
import ErrorElement from './ErrorElement';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const ContactPage = lazy(() => import('./LazyLoading'));

const AppLayout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <Loading />,
      },
      {
        path: '/lazy',
        element: (
          <Suspense fallback={<Loading />}>
            <ContactPage></ContactPage>
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} fallbackElement={<Loading />} />);
