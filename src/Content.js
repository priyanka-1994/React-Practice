import { useState } from "react";

const Content = () => {
    const [name, setName] = useState('Dave')
    const [count, setcount] = useState(0);

    const handleNameChange = () => {
        const names = ['bob','priya','dave']
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }
      const handleClick = () => {   
        setcount(count+1)
        setcount(count+1)
        console.log(count)
      }
      const handleClick2= () => {
        console.log(count)
      }
      const handleClick3= (e) => {
        console.log(e.target)
      } 
      
    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello { name }
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={() => {handleClick2('Dave')}}>Click It</button>
            <button onClick={(e) => {handleClick3(e)}}>Click It</button>
        </main>
    )
}
export default Content