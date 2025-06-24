import AdminNavBar from "../components/AdminNavBar";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex">
      <AdminNavBar />
      <main className="flex-grow-1">{children}</main>
    </div>
  );
}

export default AdminLayout;
