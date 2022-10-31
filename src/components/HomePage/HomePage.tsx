import { useEffect, useState } from "react";

import { getAllPrograms } from "../../helpers/data";
import { TVProgram } from "../../models/models";
import Filters from "../Filters/Filters";
import ProgramsList from "../ProgramsList/ProgramsList";
import "./HomePage.scss";

const HomePage = () => {
  const [allPrograms, setAllPrograms] = useState<Array<TVProgram>>([]);
  const [category, setCategory] = useState<string>("movie,series");

  const updateCategory = (categoryName: string): void => {
    setCategory(categoryName);
    console.log("catName", categoryName);
  };

  const getPrograms = async (category: string) => {
    const programs = await getAllPrograms(category);
    setAllPrograms(programs);
  };

  useEffect(() => {
    getPrograms(category);
  }, [category]);

  console.log(category);

  return (
    <div className="container">
      <Filters
        updateCategory={updateCategory}
        currentCategory={category}
      ></Filters>
      <ProgramsList programs={allPrograms}></ProgramsList>
    </div>
  );
};

export default HomePage;
