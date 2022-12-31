import { useRef, useEffect, useState } from "react";

// Disable page scroll when zooming
import disableScroll from "disable-scroll";

const ImgZoom = ({ src, name, holderWidth, holderHeight }) => {
  const [scale, setScale] = useState(1);
  const [imgLeft, setImgLeft] = useState(0);
  const [imgTop, setImgTop] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [newWidth, setNewWidth] = useState(0);
  const holderRef = useRef(null);
  const imgRef = useRef(null);

  const handleZoom = (e) => {
    let oldScale = scale;
    let newScale = oldScale + e.deltaY * -0.001;
    newScale = Math.max(newScale, 1);
    setScale(newScale);
    setNewWidth(holderWidth * newScale);
  };

  const handlePositioning = (e) => {
    const imgRect = imgRef.current.getBoundingClientRect();
    const holderRect = holderRef.current.getBoundingClientRect();
    const position = {
      x: e.clientX - holderRect.left,
      y: e.clientY - holderRect.top,
    };
    let initialCursorX = cursorPos.x;
    let initialCursorY = cursorPos.y;
    let transX = imgLeft;
    let transY = imgTop;
    if (position.x < 0.3 * holderWidth) {
      transX = 0;
    } else if (position.x > 0.7 * holderWidth) {
      transX = holderWidth - imgRect.width;
    } else {
      if (initialCursorX < position.x) {
        transX = Math.max(transX - 5, holderWidth - imgRect.width);
      } else {
        transX = Math.min(0, transX + 5);
      }
    }
    if (position.y < 0.3 * holderHeight) {
      transY = 0;
    } else if (position.y > 0.7 * holderHeight) {
      transY = holderHeight - imgRect.height;
    } else {
      if (initialCursorY < position.y) {
        transY = Math.max(transY - 5, holderHeight - imgRect.height);
      } else {
        transY = Math.min(0, transY + 5);
      }
    }
    setImgLeft(transX);
    setImgTop(transY);
    setCursorPos({ x: position.x, y: position.y });
  };

  const handleMouseEnter = () => {
    disableScroll.on();
    setScale(1.3);
    setNewWidth(holderWidth * 1.3);
  };

  const handleReintialization = () => {
    setScale(1);
    setImgLeft(0);
    setImgTop(0);
    setNewWidth(holderWidth);
    setCursorPos({ x: 0, y: 0 });
    disableScroll.off();
  };

  useEffect(() => {
    if (holderWidth) {
      setNewWidth(holderWidth);
    }
  }, [holderWidth]);

  return (
    <div className="image-zoom-holder position-relative overflow-hidden">
      <img
        ref={imgRef}
        onMouseMove={handlePositioning}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleReintialization}
        onWheel={handleZoom}
        src={src}
        alt={name}
        className="img-zoom position-absolute"
        style={{
          width: `${newWidth > 0 ? `${newWidth}px` : "100%"}`,
          left: `${imgLeft}px`,
          top: `${imgTop}px`,
        }}
      />
      <img
        ref={holderRef}
        src={src}
        alt={name}
        className="opacity-0 invisible img-fluid"
        aria-hidden="true"
      />
    </div>
  );
};

export default ImgZoom;
