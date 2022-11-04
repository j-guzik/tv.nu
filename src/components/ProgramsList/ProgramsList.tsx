import { TVProgram } from "../../models/types";
import Program from "../Program/Program";
import "./ProgramsList.scss";

interface ProgramsListProps {
  programs: TVProgram[];
}

const ProgramsList = ({ programs }: ProgramsListProps) => {
  return (
    <div className="programs-list">
      {programs.map((program) => (
        <Program key={program.id} program={program}></Program>
      ))}
    </div>
  );
};

export default ProgramsList;
