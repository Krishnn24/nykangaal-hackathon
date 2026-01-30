import { useState } from "react";
<<<<<<< HEAD
import { X, Mail, Lock, Eye, EyeOff, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
=======
import { X, Mail, Lock, Eye, EyeOff, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

<<<<<<< HEAD
  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register state
  const [name, setName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isOpen) return null;

  // ================= LOGIN =================
  const handleLogin = () => {
    setError("");
    setSuccess("");

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      setError("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(savedUser);

    if (
      user.email === loginEmail &&
      user.password === loginPassword
    ) {
      setSuccess("Login successful!");
      setTimeout(onClose, 1000);
    } else {
      setError("Invalid email or password.");
    }
  };

  // ================= REGISTER =================
  const handleRegister = () => {
    setError("");
    setSuccess("");

    if (!name || !regEmail || !phone || !regPassword) {
      setError("Please fill all fields.");
      return;
    }

    const user = {
      name,
      email: regEmail,
      phone,
      password: regPassword,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setSuccess("Account created! Please login.");
    setActiveTab("login");

    setName("");
    setRegEmail("");
    setPhone("");
    setRegPassword("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

=======
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
<<<<<<< HEAD
      <div className="relative w-full max-w-md mx-4 bg-background rounded-2xl shadow-xl overflow-hidden">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full"
=======
      <div className="relative w-full max-w-md mx-4 bg-background rounded-2xl shadow-hover animate-scale-in overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors z-10"
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
<<<<<<< HEAD
        <div className="gradient-hero px-6 py-6 text-center">
          <h2 className="text-3xl font-bold">Welcome</h2>
          <p className="text-sm text-muted-foreground">
            Login or create account
          </p>
        </div>

        {/* Body */}
        <div className="p-6">

          {/* Messages */}
          {error && (
            <p className="text-red-500 text-sm mb-3 text-center">
              {error}
            </p>
          )}

          {success && (
            <p className="text-green-500 text-sm mb-3 text-center">
              {success}
            </p>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>

            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            {/* ================= LOGIN ================= */}

            <TabsContent value="login" className="space-y-4">

              <div>
                <Label>Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    type="email"
                    className="pl-9"
                    placeholder="email@gmail.com"
=======
        <div className="gradient-hero px-6 py-8 text-center">
          <h2 className="font-display text-3xl font-bold text-primary mb-2">
            Welcome to Ny-Kangaal
          </h2>
          <p className="text-muted-foreground text-sm">
            Your beauty destination awaits
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6 bg-secondary">
              <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Login
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Register
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
                  />
                </div>
              </div>

<<<<<<< HEAD
              <div>
                <Label>Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />

                  <Input
                    value={loginPassword}
                    onChange={(e) =>
                      setLoginPassword(e.target.value)
                    }
                    type={showPassword ? "text" : "password"}
                    className="pl-9 pr-9"
                    placeholder="password"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-3"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
=======
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
                  </button>
                </div>
              </div>

<<<<<<< HEAD
              <Button
                onClick={handleLogin}
                className="w-full"
              >
                Login
              </Button>

            </TabsContent>

            {/* ================= REGISTER ================= */}

            <TabsContent value="register" className="space-y-4">

              <div>
                <Label>Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4" />
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-9"
                    placeholder="Full name"
=======
              <div className="flex justify-end">
                <button className="text-sm text-primary hover:underline">
                  Forgot Password?
                </button>
              </div>

              <Button className="w-full gradient-primary text-primary-foreground font-semibold py-6">
                Login
              </Button>
            </TabsContent>

            <TabsContent value="register" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
                  />
                </div>
              </div>

<<<<<<< HEAD
              <div>
                <Label>Email</Label>
                <Input
                  value={regEmail}
                  onChange={(e) =>
                    setRegEmail(e.target.value)
                  }
                  type="email"
                  placeholder="email@gmail.com"
                />
              </div>

              <div>
                <Label>Phone</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  placeholder="+91..."
                />
              </div>

              <div>
                <Label>Password</Label>
                <Input
                  value={regPassword}
                  onChange={(e) =>
                    setRegPassword(e.target.value)
                  }
                  type="password"
                  placeholder="Create password"
                />
              </div>

              <Button
                onClick={handleRegister}
                className="w-full"
              >
                Create Account
              </Button>

            </TabsContent>

          </Tabs>
=======
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create password"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <Button className="w-full gradient-primary text-primary-foreground font-semibold py-6">
                Create Account
              </Button>
            </TabsContent>
          </Tabs>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="outline" className="py-5">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="py-5">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            By continuing, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">Terms of Service</a>
            {" "}and{" "}
            <a href="#" className="text-primary hover:underline">Privacy Policy</a>
          </p>
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
