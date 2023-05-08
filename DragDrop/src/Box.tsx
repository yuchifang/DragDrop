import { useState } from 'react';
import Card from './Card'
function Box({ card, moveCard }:any) {
    const [isOver, setIsOver] = useState(false);
  
    function handleDragOver(e:any) {
      if (e.dataTransfer.types[0] === "text/plain") {
        console.log("some")
        setIsOver(true);
        e.preventDefault();
      }
    }
  
    function handleDrop(e:any) {
      const dataJSON = e.dataTransfer.getData("text/plain");
      let data;
      try {
        data = JSON.parse(dataJSON);
      } catch {}

      if (data && data.type === "card") {
        moveCard();
      }
    }
  
    function handleDragLeave() {
      setIsOver(false);
    }
  
    return (
      <div
        className="box"
        style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12)" }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
        {card ? <Card /> : "Box"}
      </div>
    );
  }
export default Box