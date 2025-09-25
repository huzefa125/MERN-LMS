import AuthPage from './pages/auth';
import { Route,Routes } from  'react-router-dom';

function App() {

  return (
    <>
     <Routes>
                <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </>
  )
}

export default App
