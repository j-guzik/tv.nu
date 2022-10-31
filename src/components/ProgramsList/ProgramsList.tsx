import { TVProgram } from "../../models/models";
import Program from "../Program/Program";

interface ProgramsListProps {
  programs: TVProgram[];
}

const ProgramsList = ({ programs }: ProgramsListProps) => {
  console.log(programs);
  return (
    <div>
      {programs.map((program) => (
        <Program program={program}></Program>
      ))}
    </div>
  );
};

export default ProgramsList;
