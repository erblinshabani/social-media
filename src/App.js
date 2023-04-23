import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import './App.css';
import { auth } from './firebase/firebase';
import { Login } from './pages/signIn/Login';
import { PageNotFound } from './pages/pageNotFound';
import { Navbar } from './Routes/Navbar/Navbar';
import { Sidebar } from './Routes/Sidebar/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Page } from './pages/ushtrime-redux/Page';

const Home = lazy(() => import('./pages/home/Home'))
const Menu = lazy(() => import('./pages/menu/Menu'))
const Profile = lazy(() => import('./pages/profile/Profile'))

const client = new QueryClient()

function App() {
  const [user, isLoading] = useAuthState(auth)

  if(isLoading) {
    return <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  }

  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
            <div className='pages'>
              {user && <Sidebar />}
              <Suspense fallback={<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}>
                <Routes>
                  <Route path="/social-media" element={<Home />}/>
                  <Route path="/page" element={<Page />}/>
                  {user ?
                      <>
                        <Route path="/menu" element={<Menu />}/>
                        <Route path="/profile" element={<Profile />}/>
                      </>
                  : <Route path="/login" element={<Login />}/>}
                  <Route path="*" element={<PageNotFound />}/>
                </Routes>
              </Suspense>
            </div>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
