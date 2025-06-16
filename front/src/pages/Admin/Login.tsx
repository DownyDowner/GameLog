import XpWindow from "../../components/XpWindow";
import { FormEvent, useState } from "react";
import { mdiEmailOutline, mdiLockOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { login } from "../../apis/AuthApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      console.log("Connexion réussie :", result);
    } catch (error) {
      alert("Erreur de connexion. Veuillez vérifier vos identifiants.");
    }
  };

  return (
    <XpWindow title="Connexion">
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <Icon path={mdiEmailOutline} size={0.9} />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 input-group">
            <span className="input-group-text bg-light">
              <Icon path={mdiLockOutline} size={0.9} />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn xp-button w-100">
            Se connecter
          </button>
        </form>
      </div>
    </XpWindow>
  );
}

export default Login;
