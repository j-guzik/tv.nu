import { useEffect, useState } from "react";
import { TVProgram } from "../../models/models";
import "./Poster.scss";

interface ImageProps {
  imageLandscape: string;
}

const Poster = ({ imageLandscape }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [image, setImage] = useState<string>(imageLandscape);

  useEffect(() => {
    if (isError) {
      setImage(
        "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"
      );
    } else if (isLoaded) {
      setImage(imageLandscape);
    }
  }, [isError, isLoaded, imageLandscape]);

  const onPosterLoaded = () => {
    setIsLoaded(true);
    setIsError(false);
  };

  const onPosterError = () => {
    setIsLoaded(false);
    setIsError(true);
  };

  return (
    <div className="img-container">
      <div className={"poster " + (isLoaded ? "show" : "hide")}>
        <img
          onLoad={onPosterLoaded}
          onError={onPosterError}
          src={image}
          alt="movie poster"
        ></img>
      </div>
      <div className={"spinner " + (isLoaded ? "hide" : "show")}>
        <div className="blob top"></div>
        <div className="blob bottom"></div>
        <div className="blob left"></div>
        <div className="blob move-blob"></div>
      </div>
    </div>
  );
};

export default Poster;
