import { useState } from "react";

const useActiveCard =() =>{
  const [translateX, setTranslateX] = useState(false);
  const setActiveCard =()=>{
    setTranslateX(!translateX);
  }
  return {translateX, setActiveCard}
}

export default useActiveCard