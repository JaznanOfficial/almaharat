// import { useState } from 'react'
import "./App.scss";
import CompleteGreetWidget from "./components/Greet";
import Homepage from "./pages/Homepage";

function App() {
    return (
        <>
            <Homepage />
            <main className="h-[3000px]"></main>
            <CompleteGreetWidget />
        </>
    );
}

export default App;
