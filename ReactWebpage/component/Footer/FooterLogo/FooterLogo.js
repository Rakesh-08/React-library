import "./FooterLogo.css";

function FooterLogo({ logo, altImg }) {
  return (
    <a href="#">
      <img src={logo} alt={altImg} />
    </a>
  );
}
export { FooterLogo };
