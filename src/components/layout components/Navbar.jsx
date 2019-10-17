import React from "react";
import userAuth from "../../services/userAuth.service";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	cerrarSesion() {
		userAuth.logout();
	}

	componentDidMount() {
		document.querySelector(".nav-link").addEventListener("click", e => {
			document.getElementById("nav_collapser").click();
		});
		document.querySelector(".nav-rutas").addEventListener("click", e => {
			document.getElementById("nav_collapser").click();
		});
		document.querySelector(".nav-post").addEventListener("click", e => {
			document.getElementById("nav_collapser").click();
		});
	}

	render() {
		return (
			<React.Fragment>
				<nav className="navbar navbar-dark bg-white fixed-top border-bottom text-center">
					<a className="navbar-brand" href="/"></a>
					<button
						id="nav_collapser"
						className="navbar-toggler collapsed bg-oranges"
						type="button"
						data-toggle="collapse"
						data-target="#collapse"
						aria-controls="collapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon oranges"></span>
					</button>

					<div className="navbar-collapse collapse" id="collapse">
						<ul className="navbar-nav mr-auto ">
							<li className="nav-item active">
								<Link className="nav-link menu" to="/profile">
									Mi perfil <span className="sr-only"></span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link nav-rutas menu" to="/misrutas">
									Mis Rutas
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link nav-post menu" to="/mispost">
									Mis Publicaciones
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link menu" to="/faqs">
									Ayuda
								</Link>
							</li>
							<li className="nav-item  text-danger">
								<a
									className="nav-link  text-danger "
									href="/"
									onClick={this.cerrarSesion}
								>
									Cerrar Sesión
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}

export default Navbar;
