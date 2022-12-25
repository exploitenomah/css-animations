import Header from "./Header";
import Footer from "./Footer";

export default function Layout ({ 
  children
}) {

  return (
    <>
    <Header />
      <div className="px-8 py-6">
        {children}
      </div>
    <Footer />
    </>
  )
}