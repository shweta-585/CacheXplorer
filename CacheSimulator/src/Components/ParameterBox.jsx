import React, { useState } from "react";
import "../styles/parameterbox.css";

const ParameterBox = ({onSubmit}) => {
  const powerOfTwo = (start, end) => {
    const result = [];
    for (let index = start; index <= end; index++) {
      result.push(Math.pow(2, index));
    }
    return result;
  };

  const mmSizes = powerOfTwo(0, 4);
  const cacheSizes = powerOfTwo(0, 5);
  const blockSizes = powerOfTwo(1, 3);
  
  const [mmSize, setmmSize] = useState(32);
  const [cacheSize, setcacheSize] = useState(64);
  const [blockSize, setBlockSize] = useState(16);
  
  const handleSubmit = () => {
    onSubmit({
        mmSize, cacheSize, blockSize
    });
  };

  return (
    <div className="para-box">
      <div className="map-para-div">
        <h3>Cache Parameters</h3>
        <div>
          <label>MM Size</label>
          <select
            value={mmSize}
            onChange={(e) => setmmSize(Number(e.target.value))}
          >
            {mmSizes.map((size) => (
              <option key={size} value={size}>
                {size} GB
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Cache Size</label>
          <select
            value={cacheSize}
            onChange={(e) => setcacheSize(Number(e.target.value))}
          >
            {cacheSizes.map((size) => (
              <option key={size} value={size}>
                {size} MB
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Block Size</label>
          <select
            value={blockSize}
            onChange={(e) => setBlockSize(Number(e.target.value))}
          >
            {blockSizes.map((size) => (
              <option key={size} value={size}>
                {size} KB
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ParameterBox;
