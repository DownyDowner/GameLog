import { Link } from "react-router-dom";
import { ROUTES } from "../../router/Routes";

function AdminDashboard() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Admin Dashboard</h1>
      <p className="mb-4 text-center">Bienvenue, administrateur !</p>

      <div className="col-12">
        <div className="card shadow-sm text-center h-100">
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">Gestion des plateformes</h5>
              <p className="card-text">Administrez les plateformes.</p>
            </div>
            <Link to={ROUTES.ADMIN_PLATFORMS} className="btn btn-primary mt-3">
              Voir les plateformes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
