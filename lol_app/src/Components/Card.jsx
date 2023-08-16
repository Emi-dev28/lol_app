import React from 'react'

const Card = ({data}) => {
const [counter, setCounter] = useState(0);
const handleClickSuma = () => {
setCounter(counter+1);
}
const handleClickResta = () => {
    setCounter(counter-1);
}
console.log(counter);
  return (
    <div>   
    
    </div>
  )
}

export default Card