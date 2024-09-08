import { Metadata } from "next";
import { Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/theme/provider";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Toaster } from "@/components/ui/sonner";
import Copyright from "../components/common/copyright";
import TRPCProvider from "@/app/_trpc/provider";
import "./globals.css";

const TITLE = "Tiny";
const DESCRIPTION = "Got a long URL? Hand it over, and I'll shrink it for you!";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["URL", "URL Shortener"],
  twitter: {
    card: "summary",
    site: "@abhayvashokan",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@abhayvashokan",
  },
  openGraph: {
    type: "website",
    url: "https://tiny.abhay.app",
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
  },
};

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "800"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          <TRPCProvider>{children}</TRPCProvider>
          <Copyright />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
