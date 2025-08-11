function Footer() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between py-6 bg-red-500">
      <div className="text-4xl">&copy; 2025</div>
      <button
        onClick={scrollToHero}
        className="bg-blue-100 duration-300 hover:bg-blue-300 p-4 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          className="text-blue-800"
        >
          <path d="M13.0001 7.82843V20H11.0001V7.82843L5.63614 13.1924L4.22192 11.7782L12.0001 4L19.7783 11.7782L18.3641 13.1924L13.0001 7.82843Z"></path>
        </svg>
      </button>
    </div>
  );
}
export default Footer;