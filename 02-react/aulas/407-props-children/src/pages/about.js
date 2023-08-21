import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Author from "@/components/Author";

function About() {
  return (
    <main>
      <Menu />
      <h2>Sobre Celke!</h2>
      <Author name={"Cesar"} courses={{price: 967, workload: "20 horas"}}>React</Author>
      <Footer />
    </main>
  )
}

export default About;
