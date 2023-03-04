import { useState } from "react";
import Searchbar from "./component/searchbar/searchbar";
import { Producttable } from "./component/producttable/producttable";

export const App = ({ manavReyonu }) => {
  const [aramaAlanı, setAramaAlanı] = useState("");
  const [stokSorgu, setStokSorgu] = useState(false);
  console.log(manavReyonu);

  return (
    <div className="container">
      <Searchbar
        aramaAlanı={aramaAlanı}
        stokSorgu={stokSorgu}
        filterAramaAlanı={(e) => setAramaAlanı(e)}
        filterStokSorgu={(e) => setStokSorgu(e)}
      />
      <Producttable
        manavReyonu={manavReyonu}
        aramaAlanı={aramaAlanı}
        stokSorgu={stokSorgu}
      />
    </div>
  );
};
