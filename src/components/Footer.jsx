function Footer(){
    return(
        <div >
        <footer className="footer sm:footer-horizontal bg-blue-800 text-base-content text-white p-10">
          <nav>
            <h1 className="text-white font-bold text-xl">Angel Coach</h1>
          </nav>
          <nav>
            <h6 className="footer-title">Servicios</h6>
            <a className="link link-hover">Dietas</a>
            <a className="link link-hover">Ruitunas</a>
            <a className="link link-hover">Asesorias</a>
          </nav>
          {/* <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav> */}
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Términos de uso</a>
            <a className="link link-hover">Política de privacidad</a>
            <a className="link link-hover">Cookies</a>
          </nav>
          
        </footer>
        <div className="text-center p-4 bg-blue-900 text-white">
          © 2026 Angel Coach. Todos los derechos reservados.
          </div>
        </div>
    );
}
export default Footer;