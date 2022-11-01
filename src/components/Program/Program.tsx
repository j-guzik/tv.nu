import { TVProgram } from "../../models/models";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Program.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Poster from "../Poster/Poster";

interface ProgramProps {
  program: TVProgram;
}

const Program = ({ program }: ProgramProps) => {
  return (
    <div className="program_card">
      <div className="info_section">
        <div className="movie_header">
          <h1 className="title">{program.title}</h1>
          <p className="genres">
            {program.genres
              .filter((val, id, array) => array.indexOf(val) == id)
              .map((genre) => (
                <span className="genre">{genre}</span>
              ))}
          </p>
        </div>
        <div className="programProviders">
          {program.playProviders.length > 0 ? (
            program.playProviders.map((playerProvider) => (
              <span className="programProvider">{playerProvider.name}</span>
            ))
          ) : (
            <p className="provider-available">Streaming not available</p>
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
      <Poster imageLandscape={program.imageLandscape}></Poster>
    </div>
  );
};

export default Program;
