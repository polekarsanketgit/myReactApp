import { useState, useMemo } from "react";

const UseMemoCom = () => {
  const [query, setQuery] = useState("");
  const [items] = useState([
    { id: 1, name: "Ade" },
    { id: 2, name: "Adkhal" },
    { id: 3, name: "Agarvayangani" },
    { id: 4, name: "Aghari" },
    { id: 5, name: "Ambavali Bk" },
    { id: 6, name: "Ambavali Kh" },
    { id: 7, name: "Anjarla" },
    { id: 8, name: "Apti" },
    { id: 9, name: "Asond" },
    { id: 10, name: "Asud" },
    { id: 11, name: "Atgaon" },
    { id: 12, name: "Awashi" },
    { id: 13, name: "Bandhativare" },
    { id: 14, name: "Bhadavale" },
    { id: 15, name: "Bhanghar" },
    { id: 16, name: "Bhatghar" },
    { id: 17, name: "Bhati" },
    { id: 18, name: "Bhomadi" },
    { id: 19, name: "Bhopan" },
    { id: 20, name: "Bondivali" },
    { id: 21, name: "Borghar" },
    { id: 22, name: "Borivali" },
    { id: 23, name: "Borthal" },
    { id: 24, name: "Brahmanwadi" },
    { id: 25, name: "Burondi" },
    { id: 26, name: "Chandikanagar" },
    { id: 27, name: "Chandivane" },
    { id: 28, name: "Chandranagar" },
    { id: 29, name: "Chikhalgaon" },
    { id: 30, name: "Chinchali" },
    { id: 31, name: "Dabhil" },
    { id: 32, name: "Dalkhan" },
    { id: 33, name: "Damame" },
    { id: 34, name: "Dauli" },
    { id: 35, name: "Degaon" },
    { id: 36, name: "Dehen" },
    { id: 37, name: "Derde" },
    { id: 38, name: "Devke" },
    { id: 39, name: "Dhankoli" },
    { id: 40, name: "Dr. Iqubalnagar" },
    { id: 41, name: "Dumdeo" },
    { id: 42, name: "Ganpatipule" },
    { id: 43, name: "Gaontale" },
    { id: 44, name: "Gavhe" },
    { id: 45, name: "Gavrai" },
    { id: 46, name: "Gudaghe" },
    { id: 47, name: "Harnai" },
    { id: 48, name: "Hatip" },
    { id: 49, name: "Ilane" },
    { id: 50, name: "Inampangari" },
    { id: 51, name: "Jamge" },
    { id: 52, name: "Juikar Mohalla" },
    { id: 53, name: "Kadivali" },
    { id: 54, name: "Kalambat" },
    { id: 55, name: "Kalanagar" },
    { id: 56, name: "Kalki" },
    { id: 57, name: "Kangavai" },
    { id: 58, name: "Karajgaon" },
    { id: 59, name: "Karanjali" },
    { id: 60, name: "Karanjani" },
    { id: 61, name: "Karde" },
    { id: 62, name: "Katran" },
    { id: 63, name: "Kawadoli" },
    { id: 64, name: "Kelashi" },
    { id: 65, name: "Kelil" },
    { id: 66, name: "Kharavate" },
    { id: 67, name: "Kherdi" },
    { id: 68, name: "Kinhal" },
    { id: 69, name: "Kolbandre" },
    { id: 70, name: "Kolthare" },
    { id: 71, name: "Kondhye" },
    { id: 72, name: "Kongle" },
    { id: 73, name: "Kudavale" },
    { id: 74, name: "Kumbhave" },
    { id: 75, name: "Ladghar" },
    { id: 76, name: "Lonvadi" },
    { id: 77, name: "Mahalunge" },
    { id: 78, name: "Mahamaynagar" },
    { id: 79, name: "Malvi" },
    { id: 80, name: "Mandivali" },
    { id: 81, name: "Mathegujar" },
    { id: 82, name: "Matwan" },
    { id: 83, name: "Mauje" },
    { id: 84, name: "Mele" },
    { id: 85, name: "Mugij" },
    { id: 86, name: "Murdi" },
    { id: 87, name: "Murud" },
    { id: 88, name: "Nante" },
    { id: 89, name: "Nargoli" },
    { id: 90, name: "Navase" },
    { id: 91, name: "Navashi" },
    { id: 92, name: "Nawanagar" },
    { id: 93, name: "Nigade" },
    { id: 94, name: "Olgaon" },
    { id: 95, name: "Onanvase" },
    { id: 96, name: "Oni" },
    { id: 97, name: "Pachavali" },
    { id: 98, name: "Padale" },
    { id: 99, name: "Palgad" },
    { id: 100, name: "Panchanadi" },
  ]);

  // Use useMemo to memoize the sorted list
  const sortedItems = useMemo(() => {
    console.log("Sorting items...");
    return [...items].sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  // Filter the sorted list based on the query
  const filteredItems = sortedItems.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Example of UseMemo</h1>
      <h3>Search and Sort List</h3>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoCom;
