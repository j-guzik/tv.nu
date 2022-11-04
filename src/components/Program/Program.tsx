import { TVProgram } from "../../models/types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Program.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Poster from "../Poster/Poster";

interface ProgramProps {
  program: TVProgram;
}

const Program = ({ program }: ProgramProps) => {
  return (
    <div className="program-card">
      <div className="info-section">
        <div className="info-container">
          <div className="movie-header">
            <h1 className="title">{program.title}</h1>
            <p className="genres">
              {program.genres
                .filter((val, id, array) => array.indexOf(val) == id)
                .map((genre) => (
                  <span key={genre} className="genre">
                    {genre}
                  </span>
                ))}
            </p>
          </div>
          <div className="movie-bottom">
            <div className="program-providers">
              {program.playProviders.length > 0 ? (
                program.playProviders.map((playerProvider) => (
                  <span key={playerProvider.name} className="program-provider">
                    {playerProvider.name}
                  </span>
                ))
              ) : (
                <p className="provider-noAvailable">Streaming not available</p>
              )}
            </div>
            <div className="rating">
              <div className="star">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>
                {program.imdb ? (
                  program.imdb.rating
                ) : (
                  <p className="available">Not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Poster imageLandscape={program.imageLandscape}></Poster>
    </div>
  );
};

export default Program;
