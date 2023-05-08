import { useState } from "react";

function Card() {
    const [isDragging, setIsDragging] = useState(false);
  
    function handleDragStart(e:any) {
      setIsDragging(true);
      const data = JSON.stringify({ type: "card" });
      e.dataTransfer.setData("text/plain", data);
    }
  
    function handleDragEnd(e:any) {
      setIsDragging(false);
      e.dataTransfer.clearData();
    }
  
    return (
      <div
        className="card"
        style={{
          backgroundColor: isDragging ? "#fbb" : "palegoldenrod"
        }}
        draggable
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        Card
      </div>
    );
  }
export default Card