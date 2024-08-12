export default function FooterCustom() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a
            href="https://www.linkedin.com/in/cibele-barbosa-da-silva/"
            target="_blank"
            className="hover:underline"
          >
            Cibele Barbosa da Silva
          </a>
          . Todos os Direitos Reservados.
        </span>
      </div>
    </footer>
  );
}
