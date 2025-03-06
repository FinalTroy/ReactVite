import {MouseEvent, useEffect, useState} from 'react'
import './App.css'
import {ButtonComponent} from "./components/ButtonComponent.tsx";
import {Language} from "./types/button.ts";
import translates from "./translates/translates.json"
import {DummyResponse} from "./types/common.ts";

function App() {
  const [language , setLanguage] = useState<Language>(Language.CZ);

  /** TODO: v effectu bych resil nacitani dat z API */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dummy/translates');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: DummyResponse = await response.json();
        return data;
      }
      catch (error) {
        console.log('Chyba: ', error);
      }
    }
    fetchData().then(data => console.log(data));
  }, [])

  /** Handler na click buttonu */
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLanguage(prev => prev === Language.CZ ? Language.ENG : Language.CZ);
  }

  return (
      <>
        <p>{language}</p>
        <ButtonComponent onClick={handleClick} value={translates[`text.${language}`]} />
      </>

  )
}

export default App
