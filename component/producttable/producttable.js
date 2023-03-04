import { Producttablecategoryrow } from "./producttablecategoryrow/producttablecategoryrow";
import { Productrow } from "./productrow/productrow";

export const Producttable = ({ manavReyonu, stokSorgu, aramaAlanı }) => {
  console.log(manavReyonu);

  const yeniÜrünler = [];
  let ürünSorgu = null;

  manavReyonu.forEach((ürün) => {
    if (ürün.isim.toLocaleLowerCase().indexOf(aramaAlanı) === -1) {
      return;
    }
    if (stokSorgu && !ürün.stok) {
      return;
    }
    if (ürün.kategori !== ürünSorgu) {
      yeniÜrünler.push(<Producttablecategoryrow kategori={ürün.kategori} />);
      console.log(yeniÜrünler);
    }

    yeniÜrünler.push(
      <Productrow isim={ürün.isim} fiyat={ürün.fiyat} stok={ürün.stok} />
    );
    return (ürünSorgu = ürün.kategori);
  });
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>İsim</h2>
        <h2>Fiyat</h2>
      </div>
      <div className="table-products">{yeniÜrünler}</div>
    </div>
  );
};

// map yeni aray döndürür ama var olan array ı değiştirmez
