// import { BasicTypes } from './typescript/BasicTypes';
// import { ObjectLiterals } from './typescript/ObjectLiterals';
// import { BasicFunctions } from './typescript/BasicFunctions';
// import { Counter } from './components/Counter';
// import { LoginPage } from './components/LoginPage';
import './App.css';
import { UsersPage } from './components/UsersPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className='flex flex-col justify-center items-center h-svh '>
        <h1 className='text-3xl font-bold underline'>React + TypeScript </h1>
        {/* <BasicTypes /> */}
        {/*<ObjectLiterals /> */}
        {/*<BasicFunctions />*/}
        {/* <Counter />*/}
        {/* <LoginPage /> */}
        <UsersPage />
      </div>
    </AuthProvider>
  );
}

export default App;
