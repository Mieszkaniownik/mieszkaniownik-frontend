import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import useUser from "../context/UserContext/useUser";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../api/api";
import { ArrowUpIcon, Eye, EyeClosed } from "lucide-react";

function RegisterForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, login } = useUser();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/profile", { replace: true });
    }
  }, [user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const email = formData.get("email");
    // const password = formData.get("password");

    setLoading(true);

    try {
      //   const res = await fetch(`${API_BASE_URL}/api/login`, {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ email, password }),
      //     credentials: "include",
      //   });
      //   if (!res.ok) {
      //     const data = await res.json();
      //     throw new Error(data.message || "Błąd logowania");
      //   }
      //   const userData = await res.json();
      //   login(userData);
      //   navigate("/profile", { replace: true });
    } catch (err) {
      //   alert("Błąd logowania");
      //   console.error(err);
      //   navigate("/login", { replace: true });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full flex justify-center items-center flex-col p-5">
      <div className="flex flex-col gap-8 items-start w-full max-w-350">
        <button
          className="flex items-center gap-2 text-blue-950 hover:text-blue-700 transition-colors duration-300"
          onClick={() => navigate("/")}
        >
          <ArrowUpIcon className="rotate-[-90deg]" />
          Powrót do strony głównej
        </button>
      </div>
      <div className="flex flex-col justify-center items-center max-w-md w-full gap-1 p-4 h-auto">
        <div className="flex flex-col items-center gap-1 p-4 w-full">
          <img
            src={logo}
            alt="Logo strony Mieszkaniownik"
            width={80}
            height={80}
            className="bg-transparent"
          />
          <span className="text-center text-blue-950 font-bold text-2xl tracking-wider">
            Mieszkaniownik
          </span>
          <p className="text-center text-blue-950 text-base">
            Twój klucz do studenckiego mieszkania
          </p>
        </div>

        <form
          className="flex flex-col gap-6 w-full border-gray-200 rounded-xl border p-4 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="gap-1 flex flex-col">
            <h1 className="font-semibold text-xl text-blue-950 ">
              Rejestracja
            </h1>
            <p className="text-gray-500 text-sm">
              Wypełnij formularz, aby utworzyć konto
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium text-blue-950">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              required={true}
              placeholder="email@example.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium text-blue-950">
              Imię:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              required={true}
              placeholder="Jan"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="surname" className="font-medium text-blue-950">
              Nazwisko:
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
              required={true}
              placeholder="Nowak"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-medium text-blue-950">
              Hasło:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full rounded-lg border-solid border-1 border-gray-300 p-2"
                placeholder="Podaj hasło"
                required={true}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <button
              type="submit"
              className="cursor-pointer disabled:cursor-default disabled:opacity-50 rounded-lg border-solid border-1  p-2 text-white bg-blue-500 not-disabled:hover:bg-blue-600 transition-colors duration-300"
              disabled={loading}
            >
              Zarejestruj się
            </button>

            <p className="text-gray-500 text-sm text-right w-full">
              Już masz konto?{" "}
              <Link
                to="/login"
                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
              >
                Zaloguj się
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default RegisterForm;
