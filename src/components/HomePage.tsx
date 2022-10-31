import { useEffect, useState } from "react";

import { getAllPrograms } from "../helpers/data";
import { TVProgram } from "../models/models";
import ProgramsList from "./ProgramsList/ProgramsList";

const HomePage = () => {
  const [allPrograms, setAllPrograms] = useState<Array<TVProgram>>([]);

  const getPrograms = async () => {
    const programs = await getAllPrograms();
    setAllPrograms(programs);
  };

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <div>
      <ProgramsList programs={allPrograms}></ProgramsList>
    </div>
  );
};

export default HomePage;
