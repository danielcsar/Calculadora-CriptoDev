import "./App.css";
import useCalc from "./hooks/useCalc";

(window as any).global = window;

function App() {
  const { valorTela, resultado, calcKey } = useCalc();
  return (
    <div className="App Container">
      <div className="flex h-20 Container m-full flex-row">
        <div className="bg-white w-full flex justify-between py-4 pr-20">       
          <img
            src={"https://criptodev.corporate.gama.academy/wp-content/uploads/sites/22/2022/01/logo-cripto-dev.svg"}
            className="img flex"
            alt="logo"
          />
          <button className="font-sans font-semibold bg-white hover:bg-cd-orange inline-block relative text-cd-blue items-center w-40 h-10 text-center">
            <a className="close" href="https://www.linkedin.com/in/danielcsar/">Linked-In</a>
          </button>
          <button className="font-sans font-semibold bg-white hover:bg-cd-orange inline-block relative text-cd-blue items-center w-40 h-10 text-center">
            <a className="close" href="mailto:danielcesar.eng@gmail.com">Email</a>
          </button>
          <button className="btn font-bold bg-cd-orange hover:bg-cd-blue inline-block relative text-cd-blue hover:text-white items-center w-40 h-10 text-center rounded-md">
            <a href="https://github.com/danielcsar">Github</a>
          </button>
        </div>
      </div>
      <header className="bg-cd-orange flex justify-center">        
        <div className="App-header box flex flex-col items-center py-5 my-16 bg-cd-blue ">
          <div className="tela flex flex-col bg-cd-tela w-64 h-20 mb-2.5 rounded-md justify-end items-end p-5">
            <h2 className="self-end">{valorTela}</h2>
            <h1 className="self-end ">{parseInt(resultado) != 0 && <h1>{resultado}</h1>}</h1>
          </div>
          <div className="grid-botoes grid grid-cols-4 gap-1.5 my-2.5 cursor-pointer">
            {calcKey.map((value: any) => {
              if (value.digito === "=") {
                return (
                  <button
                    className="w-12 h-12 bg-cd-blue-2 rounded-full"
                    key={value.digito}
                    type="button"
                    onClick={value.fn}
                  >
                    {value.digito}
                  </button>
                );
              }
              return (
                <button
                  className="w-12 h-12 bg-cd-blue-2 rounded-full"
                  key={value.digito}
                  type="button"
                  onClick={value.fn}
                >
                  {value.digito}
                </button>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
