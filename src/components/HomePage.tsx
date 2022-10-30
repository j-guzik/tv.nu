import { useEffect, useState } from "react";

import { getAllPrograms } from "../helpers/data";
import { TVProgram } from "../models/models";

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
      {allPrograms.map((program) => (
        <div>{program.title}</div>
      ))}
    </div>
  );
};

export default HomePage;
