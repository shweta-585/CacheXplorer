import React from "react";
import "../styles/mappingres.css";

const MappingSummary = ({ parameters }) => {
  const mmSize = parameters?.mmSize || 0;
  const cacheSize = parameters?.cacheSize || 0;
  const blockSize = parameters?.blockSize || 0;

  const offsetBits = blockSize > 0 ? blockSize+10 : null;
  const indexBits = (cacheSize > 0 && blockSize > 0 ) ? ((Math.log2(cacheSize)+20)-(Math.log2(blockSize)+10)) : null;
  const tagBits =   (mmSize > 0 && typeof offsetBits === "number" && typeof indexBits === "number")?((mmSize+30) - offsetBits - indexBits) : null;

  return (
    <div className="mapping-box">
      <div className="map-res-div">
        <div className="title">
          <h3>Cache Mapping Summary</h3>
        </div>
        <div className="map-res-box">
          <div>
            <label htmlFor="tagBits">Tag Bits</label>
            <input type="text" id="tagBits" name="tagBits" value={tagBits} />
          </div>
          <div>
            <label htmlFor="indexBits">Index Bits</label>
            <input
              type="text"
              id="indexBits"
              name="indexBits"
              value={indexBits}
            />
          </div>
          <div>
            <label htmlFor="offsetBits">Block Offset</label>
            <input
              type="text"
              id="offsetBits"
              name="offsetBits"
              value={offsetBits}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MappingSummary;
