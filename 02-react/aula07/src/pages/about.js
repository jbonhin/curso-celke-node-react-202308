import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Author from "@/components/Author";

function About() {
  return (
    <main>
      <Menu />
      <h2>Sobre - Aula07</h2>
      <Author 
        name={"João Fernando"} 
        courses = {{name: "React", price: 967, workload: "20 horas"}}
      />
      <Footer />
    </main>
  );
}

export default About;
