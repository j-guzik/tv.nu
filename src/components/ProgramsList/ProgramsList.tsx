import { TVProgram } from "../../models/models";
import Program from "../Program/Program";
import "./ProgramsList.scss";

interface ProgramsListProps {
  programs: TVProgram[];
}

const ProgramsList = ({ programs }: ProgramsListProps) => {
  console.log(programs);
  return (
    <div className="programs-list">
      {programs.map((program) => (
        <Program key={program.id} program={program}></Program>
      ))}
    </div>
  );
};

export default ProgramsList;
