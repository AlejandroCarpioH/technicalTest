import { ChangeEvent, useState } from "react";
import "./App.css";
// import { getApi } from "./data/getApi";
import useUserSearch from "./components/useUserSearch";

function App() {
  const [input, setInput] = useState<string>("");

  const { avatar, getApiData, loading, error } = useUserSearch();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  return (
    <div id="app" className="userSearch-Container">
      <h1>Buscador de persona</h1>
      <div className="">
        <div>
          <h3>Ingrese un número para buscar</h3>
        </div>
        <div className="userSearch">
          <input
            type="number"
            value={input}
            required
            placeholder="Ingrese ID de usuario"
            onKeyDown={(e) => {
              if (input === "") {
                return;
              }
              if (e.key === "Enter") {
                getApiData(Number(input));
              }
            }}
            onChange={handleInputChange}
          />
          <button
            className="searchButton"
            onClick={() => {
              if (input === "") {
                return;
              }
              getApiData(Number(input));
            }}
          >
            Buscar Usuario
          </button>
        </div>
      </div>

      {avatar !== "" && (
        <div>
          {!error ? (
            <div>
              {loading ? "Cargando..." : <img src={`${avatar}`} alt={avatar} />}
            </div>
          ) : (
            "Imagen No Encontrada"
          )}
        </div>
      )}
    </div>
  );
}

export default App;
