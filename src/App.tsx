import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { createWorker } from "tesseract.js";
import "./App.css";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

const worker = createWorker({
  logger: (data) => console.log(data),
});

function App() {
  const [facingMode, setFacingMode] = useState(FACING_MODE_USER);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const recognize = useCallback(async () => {
    if (imgSrc) {
      const file = imgSrc;
      const lang = "eng";
      await worker.load();
      await worker.loadLanguage(lang);
      await worker.initialize(lang);
      const {
        data: { text },
      } = await worker.recognize(file);
      console.log("result", text);
      setText(text);
      await worker.terminate();
      return text;
    }
  }, [imgSrc]);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      // @ts-ignore
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
      recognize();
    }
  }, [webcamRef, setImgSrc, recognize]);

  return (
    <div className="container">
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          ...videoConstraints,
          facingMode,
        }}
      />
      <button className="buttonHandleClick" onClick={handleClick}>
        Switch camera
      </button>
      <button className="buttonCapture" onClick={capture}>
        Capture
      </button>
      {imgSrc && <img src={imgSrc} alt="snapshot" />}
      {text && <p className="text">{text}</p>}
    </div>
  );
}

export default App;
