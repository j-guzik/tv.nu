import { useEffect, useState } from "react";

import { getAllPrograms } from "../../helpers/getData";
import { TVProgram } from "../../models/models";
import Filters from "../Filters/Filters";
import ProgramsList from "../ProgramsList/ProgramsList";
import Sorting from "../Sorting/Sorting";
import "./ListContent.scss";

const ListContent = () => {
  const [programs, setPrograms] = useState<Array<TVProgram>>([]);
  const [category, setCategory] = useState<string>("movie,series");
  const [sortedPrograms, setSortedPrograms] = useState<TVProgram[]>(programs);

  const getPrograms = async (category: string) => {
    const programs = await getAllPrograms(category);
    setPrograms(programs);
  };

  useEffect(() => {
    getPrograms(category);
  }, [category]);

  const updateCategory = (categoryName: string): void => {
    setCategory(categoryName);
  };

  const updatePrograms = (sortedPrograms: TVProgram[]): void => {
    setSortedPrograms(sortedPrograms);
  };

  return (
    <div className="list-wrapper">
      <div className="features-container">
        <div className="features">
          <Filters
            updateCategory={updateCategory}
            currentCategory={category}
          ></Filters>
          <Sorting programs={programs} setPrograms={updatePrograms}></Sorting>
        </div>
      </div>
      <ProgramsList programs={sortedPrograms}></ProgramsList>
    </div>
  );
};

export default ListContent;
