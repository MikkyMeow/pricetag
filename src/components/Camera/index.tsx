import { useEffect } from "react";
import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { createWorker } from "tesseract.js";
import "./index.css";

interface IProps {}

const worker = createWorker({
  logger: (data) => console.log(data),
});

export const Camera: React.FC<IProps> = () => {
  const [facingMode, setFacingMode] = useState<"user" | "environment">(
    "environment"
  );
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const handleClick = useCallback(() => {
    setFacingMode((prevState) =>
      prevState === "user" ? "environment" : "user"
    );
  }, []);

  const [text, setText] = useState("");

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
    }
  }, [webcamRef, setImgSrc]);

  useEffect(() => {
    if (imgSrc) {
      recognize();
    }
  }, [imgSrc, recognize]);

  return (
    <div className="container">
      <Webcam
        className={"camera"}
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode,
        }}
      />
      <button className="buttonHandleClick" onClick={handleClick}>
        Switch camera
      </button>
      <button className="buttonCapture" onClick={capture}>
        Capture
      </button>
      {imgSrc && <img className="image" src={imgSrc} alt="snapshot" />}
      {text && <p className="text">{text}</p>}
    </div>
  );
};
