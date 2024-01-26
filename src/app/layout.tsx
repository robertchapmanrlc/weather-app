
import './globals.css'

export const metadata = {
  title: "Weather App",
  description: "Use this web app to check the weather",
  icons: {
    icon: "/weather.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
