function AdminDashboard() {
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Admin Dashboard</h1>
      <p className="mb-4 text-center">Bienvenue, administrateur !</p>

      <div className="row justify-content-center">
        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Gestion des Jeux</h5>
                <p className="card-text">Gérez les jeux disponibles.</p>
              </div>
              <a href="#" className="btn btn-primary mt-3">
                Voir les jeux
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 mb-4">
          <div className="card shadow-sm text-center h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title">Gestion des plateformes</h5>
                <p className="card-text">Administrez les plateformes.</p>
              </div>
              <a href="#" className="btn btn-primary mt-3">
                Voir les plateformes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
