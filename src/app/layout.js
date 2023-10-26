import { Montserrat } from "next/font/google";
import { AuthProvider } from "@/lib/context/AuthContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function ({ children }) {
  return (
    <html lang="es" data-theme="light">
      <body className={montserrat.className}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}