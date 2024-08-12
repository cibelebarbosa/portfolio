import MaintenanceImg from "../assets/maintenance.png";

export default function Maintenance() {
  return (
    <>
      <section className="">
        <h1 className="text-center w-full text-xl text-3xl font-extrabold p-9">
          Oops... a página selecionada encontra-se em manutenção.
        </h1>
        <div className="flex justify-center">
          <img src={MaintenanceImg} alt="ProgrammingBG" className="w-2/3" />
        </div>
      </section>
    </>
  );
}
