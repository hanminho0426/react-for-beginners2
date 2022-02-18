import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
  const [conuter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.setValue);
  console.log("i run all the time ");
  useEffect (() => {
    console.log("I run only once.");
  },[])
  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run when keyword changes", keyword);
    }
  }, [keyword]);
  useEffect (() => {
    console.log("I run when 'counter' changes.");
  },[conuter]);
  useEffect (() => {
    console.log("I run when 'keyword' & 'counter' changes.");
  },[keyword, conuter]);
  
  return (
    <div>
      <Button text={"Continue"}/>
      <input 
        value={keyword} 
        onChange={onChange} 
        text="text" 
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{conuter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
