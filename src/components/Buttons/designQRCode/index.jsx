import React, { useState } from "react";

const QRCodeDesign = ({ qrStyle, setQRStyle }) => {
  const colorOptions = ['red', 'blue', 'green', 'yellow', 'purple',];
  const [selectedColor, setSelectedColor] = useState('');
  const [customColor, setCustomColor] = useState('#000'); 

  const changeColor = (color) => {
    setSelectedColor(color);
    setQRStyle({ ...qrStyle, fgColor: color });
  };
  const handleCustomColorChange = (event) => {
    const newColor = event.target.value;
    setCustomColor(newColor);
    setSelectedColor(newColor);
    setQRStyle({ ...qrStyle, fgColor: newColor });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <div>
        <input type="color" value={customColor} onChange={handleCustomColorChange} 
        style={{height:'50px',width: '50px',
        border: 'solid 2px white',
        cursor: 'pointer',}} />
      </div>
      {colorOptions.map((color, index) => (
        <div
        style={{
          width: '50px',
          height: '50px',
          border: 'solid 2px white',
          cursor: 'pointer',
          backgroundColor: color, // Set background color based on selection
        }}
          key={index}
          className="color-option"
          // style={{ backgroundColor: color }}
          onClick={() => changeColor(color)}
        >
        </div>
      ))}
    </div>
  );
};

export default QRCodeDesign;
