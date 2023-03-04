const Searchbar = (props) => {
  console.log(props);
  const aramaAlanı = props.aramaAlanı;
  const stokSorgu = props.stokSorgu;
  return (
    <div className="bar">
      <input
        type="text"
        value={aramaAlanı}
        onChange={(e) => props.filterAramaAlanı(e.target.value)}
        className="search"
        placeholder="Aradığınız ürünü yazınız"
      />
      <div>
        <input
          type="checkbox"
          checked={stokSorgu}
          onChange={(e) => props.filterStokSorgu(e.target.checked)}
        />
        <label>Ürünleri göster</label>
      </div>
    </div>
  );
};

export default Searchbar;
