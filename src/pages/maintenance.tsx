import { GrVmMaintenance } from "react-icons/gr";

export default function Maintenance() {
  return (
    <>
      <section className="">
        <h1 className="text-center w-full text-xl text-3xl font-extrabold p-9">
          Oops... a página selecionada encontra-se em manutenção.
        </h1>
        <div className="flex justify-center">
          <GrVmMaintenance size="15rem"/>{" "}
        </div>
      </section>
    </>
  );
}
