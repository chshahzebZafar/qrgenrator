import React, { useState } from "react";

const QRCodeDesign = ({ qrStyle, setQRStyle }) => {
  const colorOptions = ['red', 'blue', 'green', 'yellow', 'purple', 'black'];
  const [selectedColor, setSelectedColor] = useState('');
  const changeColor = (color) => {
    setSelectedColor(color);
    setQRStyle({ ...qrStyle, fgColor: color }); // Update fgColor to the selected color
  };

  return (
    <div style={{display:'flex', justifyContent:'space-between',flexWrap:'wrap'}}>
      {colorOptions.map((color, index) => 
      (
        <div
          key={index}
          className="color-option"
          style={{ backgroundColor: color }}
          onClick={() => changeColor(color)}
        >
            <div style={{width:'50px',height:'50px',border:'solid 2px white',cursor:'pointer'}}></div>
        </div>
      ))
      }
    </div>
  );
};

export default QRCodeDesign;
