// import { BasicTypes } from './typescript/BasicTypes';
// import { ObjectLiterals } from './typescript/ObjectLiterals';
// import { BasicFunctions } from './typescript/BasicFunctions';
// import { Counter } from './components/Counter';
import './App.css';
import { LoginPage } from './components/LoginPage';
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
        <LoginPage />
      </div>
    </AuthProvider>
  );
}

export default App;
