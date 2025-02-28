import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Bem-vindo à Plataforma de Cursos</h1>
        <section className="courses">
          <CourseCard title="Curso 1" description="Descrição do curso 1" />
          <CourseCard title="Curso 2" description="Descrição do curso 2" />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
