import _ from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import { sortProgramsByOrder } from "../../helpers/helpers";
import { TVProgram } from "../../models/types";
import "./Sorting.scss";

interface SortingListProps {
  programs: TVProgram[];
  setPrograms: (programs: TVProgram[]) => void;
}

const Sorting = ({ programs, setPrograms }: SortingListProps) => {
  const OPTIONS = ["No sorting", "Ascending", "Descending"];
  const [selectedOption, setSelectedOption] = useState<string>("");

  useEffect(() => {
    if (selectedOption === OPTIONS[1]) {
      setPrograms(sortProgramsByOrder(programs, "asc"));
    } else if (selectedOption === OPTIONS[2]) {
      setPrograms(sortProgramsByOrder(programs, "desc"));
    } else {
      setPrograms(programs);
    }
  }, [selectedOption, programs]);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="sorting-container">
      <div className="sorting-header">Sort by IMDb rating:</div>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="select-sorting"
      >
        {OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sorting;
