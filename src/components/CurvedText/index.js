import { useState } from "react";
import jsxToString from "jsx-to-string";
import ReactCurvedText from "react-curved-text";

const CurvedText = () => {
  const [width, setWidth] = useState(740);
  const [height, setHeight] = useState(760);
  const [cx, setCx] = useState(369);
  const [cy, setCy] = useState(382);
  const [rx, setRx] = useState(333);
  const [ry, setRy] = useState(336);
  const [startOffset, setStartOffset] = useState(0);
  const [reversed, setReversed] = useState(true);
  const [text, setText] = useState(
    "CAREER MANAGEMENT\u00A0\u00A0 | \u00A0\u00A0RETENTION PROGRAMS\u00A0\u00A0 | \u00A0\u00A0HOLIDAY MANAGEMENT\u00A0\u00A0 | \u00A0\u00A0TIME TRACKING\u00A0\u00A0 | \u00A0\u00A0MODERN HARDWARE\u00A0\u00A0 | \u00A0\u00A0PRODUCTIVITY TOOLS\u00A0\u00A0 | \u00A0\u00A0COMMUNICATION TOOLS\u00A0\u00A0 |"
  );
  const [fontSize, setFontSize] = useState(24);
  const [textPathFill, setTextPathFill] = useState();
  const [dy, setDy] = useState(-6);
  const [fill, setFill] = useState();
  const [rotate, setRotate] = useState(30);

  const textProps = fontSize ? { style: { fontSize: fontSize } } : null;
  const textPathProps = textPathFill ? { fill: textPathFill } : null;
  const tspanProps = dy ? { dy: dy } : null;
  const ellipseProps = fill ? { style: `fill: ${fill}` } : null;
  const svgProps = rotate
    ? { style: { transform: `rotate(${rotate}deg)` } }
    : null;

  const currentJsx = (
    <ReactCurvedText
      width={width}
      height={height}
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      startOffset={startOffset}
      reversed={reversed}
      text={text}
      textProps={{
        style: { fontSize: 24, fontFamily: "open-sans" },
        fontWeight: 500,
      }}
      textPathProps={textPathProps}
      tspanProps={tspanProps}
      ellipseProps={ellipseProps}
      svgProps={svgProps}
    />
  );

  let currentJsxString = jsxToString(currentJsx, {
    displayName: "ReactCurvedText",
    useFunctionCode: true,
  });
  currentJsxString =
    "import ReactCurvedText from 'react-curved-text';\n\n" + currentJsxString;
  return (
    <div className="App">
      <div className="exampleDemo">
        <div className="exampleWrapperDiv">{currentJsx}</div>

        {/* --------------------------------------------------------------------------------------------------- */}
        <></>

        <div className="settingsDiv">
          <div className="settingsItem">
            <label htmlFor="text">text:</label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="reversed">reversed:</label>
            <input
              type="checkbox"
              id="reversed"
              checked={reversed}
              onChange={(e) => setReversed(e.target.checked)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="startOffset">startOffset:</label>
            <input
              type="number"
              id="startOffset"
              value={startOffset}
              onChange={(e) => setStartOffset(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={startOffset}
              onChange={(e) => setStartOffset(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="width">width:</label>
            <input
              type="number"
              id="width"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="height">height:</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="cx">cx:</label>
            <input
              type="number"
              id="cx"
              value={cx}
              onChange={(e) => setCx(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={cx}
              onChange={(e) => setCx(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="cy">cy:</label>
            <input
              type="number"
              id="cy"
              value={cy}
              onChange={(e) => setCy(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={cy}
              onChange={(e) => setCy(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="rx">rx:</label>
            <input
              type="number"
              id="rx"
              value={rx}
              onChange={(e) => setRx(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={rx}
              onChange={(e) => setRx(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="ry">ry:</label>
            <input
              type="number"
              id="ry"
              value={ry}
              onChange={(e) => setRy(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={ry}
              onChange={(e) => setRy(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="fontSize">textProps.style.fontSize:</label>
            <input
              type="number"
              id="fontSize"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="60"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="textPathFill">textPathProps.style.fill:</label>
            <input
              type="color"
              id="textPathFill"
              checked={textPathFill}
              onChange={(e) => setTextPathFill(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="dy">tspanProps.dy:</label>
            <input
              type="number"
              id="dy"
              value={dy}
              onChange={(e) => setDy(e.target.value)}
            />
            <input
              type="range"
              min="-60"
              max="60"
              value={dy}
              onChange={(e) => setDy(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="fill">ellipseProps.style.fill:</label>
            <input
              type="color"
              id="fill"
              checked={fill}
              onChange={(e) => setFill(e.target.value)}
            />
          </div>
          <div className="settingsItem">
            <label htmlFor="rotate">svgProps.style.rotate:</label>
            <input
              type="number"
              id="rotate"
              value={rotate}
              onChange={(e) => setRotate(e.target.value)}
            />
            <input
              type="range"
              min="0"
              max="360"
              value={rotate}
              onChange={(e) => setRotate(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurvedText;
