  import React, { useState } from "react";
  import "../styles/memoryvisuals.css";

  const MemoryVisual = ({ parameters }) => {
    const mmSize = parameters?.mmSize || 128;
    const cacheSize = parameters?.cacheSize || 64;
    const blockSize = parameters?.blockSize || 1;

    const cacheRows = Math.log2(cacheSize) + 20 - (Math.log2(blockSize) + 10);
    const cacheCol = 4;
    const [cacheGrid, SetCacheGrid] = useState(
      Array(cacheRows)
        .fill(0)
        .map(() => 
          Array(cacheCol).fill(null)
        )
    );

    const mmRows = Math.log2(mmSize) + 30 - (Math.log2(blockSize) + 10);
    const mmCol = 4;
    const [mmGrid, SetMmGrid] = useState(
      Array(mmRows)
        .fill(0)
        .map(() => Array(mmCol).fill(null))
    );

    const [mmIndex, SetmmIndex] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const prefetchSize = 10;

    const loadSubmit = (e) => {
      var row = Math.floor(mmIndex / 4);
      var col = mmIndex % 4;
      if (row >= mmRows) {
        alert("Main Memory is full!");
        return;
      }

      const newGrid = [...mmGrid];
      newGrid[row] = [...newGrid[row]];
      newGrid[row][col] = inputValue;
      SetMmGrid(newGrid);
      setInputValue("");
      SetmmIndex(mmIndex + 1);
    };
    const [rdAddrs, SetRdAddrs] = useState();
    const [HnMRes, SetHnMRes] = useState("");
    const readSubmit = () => {              
      var row = Math.floor(rdAddrs / 4);
      var col = rdAddrs % 4;

      if( cacheGrid[row][col] === null ) {
        SetHnMRes("Cache Miss!!");
        console.log("Cache Miss !!"); 
      } 
      else {
        SetHnMRes("Cache Hit!!");
        console.log("Cache Hit !!"); 
      }
    }

    return (
      <div className="memory-visual-container">
        <div className="cache-section">
          <h3>Cache</h3>

          <div>
            {cacheGrid.map((row, rowIndex) => {
              return (
                <div key={rowIndex} className="cache-memory">
                  {row.map((cell, colIndex) => {
                    return (
                      <div key={colIndex} className="memory-block">
                        B{rowIndex}W{colIndex}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="memory-section">
          <h3>Main Memory</h3>

          <div>
            {mmGrid.map((row, rowIndex) => {
              return (
                <div key={rowIndex} className="main-memory">
                  {row.map((cell, colIndex) => {
                    return (
                      <div key={colIndex} className="memory-block">
                        {cell !== null ? cell : `B${rowIndex}W${colIndex}`}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        <div className="command-box">
          <div className="load-data-container">
            <label className="load">LOAD</label>
            <input
              className="load-ip"
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              onClick={loadSubmit}
              className="load-btn"
              type="button"
              value="submit"
            />
          </div>

          <div className="read-data-container">
            <label className="read">READ</label>
            <input
              className="read-ip"
              placeholder="Enter address"
              type="number"
              value={rdAddrs}
              onChange={(e) => SetRdAddrs(e.target.value) }
            />
            <input
              className="read-btn"
              type="button"
              value="submit"
              onClick={readSubmit}
            />
          </div>

          <textarea value={HnMRes} className="memory-info-box"/>
        </div>

      
      </div>
    );
  };

  export default MemoryVisual;
