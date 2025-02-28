import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navbar />
      <main>
        <h1>Detalhes do Curso {id}</h1>
        <p>Aqui estão as informações detalhadas do curso.</p>
      </main>
    </>
  );
};

export default CourseDetails;
