import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useStore } from "../store/store";

export default function FilterProjectsComponent() {
  const storeSetProjects = useStore((state) => state.storeSetProjects);

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const handleSortClick = (e) => {
    e.preventDefault();
    if (!sort) {
      return;
    }
    storeSetProjects("sort", sort);
  };

  const handleFilterClick = (e) => {
    e.preventDefault();
    if (!filter) {
      return;
    }
    if (filter === "all") {
      storeSetProjects();
    } else {
      storeSetProjects("filtered", filter);
    }
  };
  return (
    <div>
      <form>
        <input
          type="radio"
          id={"a-to-z"}
          name="sortType"
          value={"a2z"}
          onChange={(e) => setSort(e.target.value)}
        />
        <span> </span>
        <label id="checklabel" htmlFor={"a-to-z"}>
          {"a-to-z"}
        </label>
        <input
          type="radio"
          id={"z-to-a"}
          name="sortType"
          value={"z2a"}
          onChange={(e) => setSort(e.target.value)}
        />
        <span> </span>
        <label id="checklabel" htmlFor={"z-to-a"}>
          {"z-to-a"}
        </label>
        <input
          type="radio"
          id={"newest-to-oldest"}
          name="sortType"
          value={"newToOld"}
          onChange={(e) => setSort(e.target.value)}
        />
        <span> </span>
        <label id="checklabel" htmlFor={"newest-to-oldest"}>
          {"newest to oldest"}
        </label>
        <input
          type="radio"
          id={"oldest-to-newest"}
          name="sortType"
          value={"oldToNew"}
          onChange={(e) => setSort(e.target.value)}
        />
        <span> </span>
        <label id="checklabel" htmlFor={"oldest-to-newest"}>
          {"oldest to newest"}
        </label>
        <Button onClick={handleSortClick} className="mini">
          Sort
        </Button>
      </form>

      <form>
        <input
          type="radio"
          id={"all"}
          name="filterType"
          value={"all"}
          onChange={(e) => setFilter(e.target.value)}
        />
        <span> </span>
        <label id="checklabel" htmlFor={"all"}>
          {"all"}
        </label>
        <input
          type="radio"
          id={"individual"}
          name="filterType"
          value={"individual"}
          onChange={(e) => setFilter(e.target.value)}
        />
        <span> </span>
        <label id="checklabel" htmlFor={"individual"}>
          {"individual projects"}
        </label>
        <input
          type="radio"
          id={"group"}
          name="filterType"
          value={"group"}
          onChange={(e) => setFilter(e.target.value)}
        />
        <span> </span>
        <label id="checklabel" htmlFor={"group"}>
          {"group projects"}
        </label>

        <Button onClick={handleFilterClick} className="mini">
          Filter
        </Button>
      </form>
    </div>
  );
}
