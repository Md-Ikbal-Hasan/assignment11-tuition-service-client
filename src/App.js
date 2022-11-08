import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes'
function App() {
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>

      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </div>
  );
}

export default App;
