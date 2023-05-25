import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Flower from "./components/svg/flower";
import Translate from "./components/translate";
import './styles.css';
function App() {
const [language,setLanguage] = useState('es');
const [text,setText] = useState('');
console.warn("translate",text,language);
  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage}/>
      <hr />
      <Translate text={text} language={language}/>
    </div>
  );
}

export default App;
