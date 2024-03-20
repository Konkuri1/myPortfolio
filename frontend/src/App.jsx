import { useCallback, useEffect } from 'react';
import './App.css'
import {apiGetAllSkills, apiGetAllSkill} from "./assets/services/skills.services";

function App() {
  const fetchData = async () => {

    useEffect(() => {
      async () =>{
        const skills = await apiGetAllSkills();
        console.log(skills.data);
        const single = await apiGetAllSkill("");
        console.log(single.data);
      };
    });
  }
  return (
    <><h1 className='text-center font-bold text-21xl text-red-800'>
      Hello World!</h1></>
  )
}

export default App;
