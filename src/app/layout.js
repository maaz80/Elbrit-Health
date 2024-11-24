import "./globals.css";


export const metadata = {
  title: "Elbrit Health",
  description: "Take care of your health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" user-scallable="no">
      <body
      >
        {children}
      </body>
    </html>
  );
}
