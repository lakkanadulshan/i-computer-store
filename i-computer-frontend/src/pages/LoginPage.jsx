import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function login(e){
        e.preventDefault();
        console.log("login button clicked");
        console.log("email:", email);
        console.log("password:", password);

        try {
            const res = await axios.post(`${import.meta.env.VITE_backend_URL}/users/login`, {
                email: email,
                password: password
            });
            console.log("Login successful:", res.data);
            if(res.data.role === "admin") {
                navigate("/admin");
            }else {
                navigate("/");
            }

            toast.success("Login successful! Redirecting...");
        } catch (error) {
            console.error("Login failed:", error);
            toast.error("Login failed. Please check your credentials and try again.");
        }

    }




    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-primary text-secondary">
            <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                <img
                    src="/bg-img.jpg"
                    alt="Computer shop display"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/50 to-transparent" />
                <div className="relative h-full w-full flex items-center justify-center lg:justify-start px-8 lg:px-12">
                    <p className="text-2xl lg:text-3xl font-semibold text-primary max-w-md">
                        Your perfect match for every computer build and upgrade.
                    </p>
                </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md bg-white/70 backdrop-blur border border-secondary/10 shadow-xl rounded-2xl p-8">
                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Welcome back</h1>
                        <p className="text-sm text-secondary/70">Sign in to continue to I-Computer.</p>
                    </div>

                    <form className="mt-8 space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium">
                                Email
                            </label>
                            <input onChange={(event)=>{
                                setEmail(event.target.value);
                               
                            }}
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-secondary/20 bg-white px-4 py-3 text-secondary shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium">
                                Password
                            </label>
                            
                            <input onChange={(event)=>{
                                setPassword(event.target.value);
                            }}
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-lg border border-secondary/20 bg-white px-4 py-3 text-secondary shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="rounded border-secondary/30 text-accent focus:ring-accent" />
                                <span>Remember me</span>
                            </label>
                            <button type="button" className="text-accent font-medium hover:underline">
                                Forgot password?
                            </button>
                        </div>

                        <button onClick={login}
                            type="submit"
                            className="w-full rounded-lg bg-secondary px-4 py-3 text-primary font-semibold shadow-md hover:bg-secondary/90 transition"
                        >
                            Log in
                        </button>
                    </form>

                    <p className="mt-6 text-sm text-center text-secondary/70">
                        Don't have an account? <Link to="/register" className="text-accent font-semibold hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}