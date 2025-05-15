import React from "react";
import { motion } from "framer-motion";
const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
  };
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <title>About | MCABYCOCAS</title>
        <div className="w-full  shadow-2xl relative">
          <div className="text-center py-4 absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
            <h1 className="text-4xl font-semibold text-shadow-indigo-100 text-gray-400">
              WELCOME TO MCA FACULTY
            </h1>
          </div>
          <img
            src="https://www.cocaspatna.ac.in/img/bd_pages.jpg"
            alt="Our College Name"
            className="mx-auto w-full h-64 "
          />
        </div>
        <div className="container mx-auto px-4 md:px-20 py-8">
          <h2 className="mb-2 text-3xl font-bold text-center text-gray-800">
            ABOUT THE COLLEGE
          </h2>
          <p className="text-justify mb-4">
            College of Commerce, Arts &amp; science, Patna, established in 1949,
            recognized under Sections 2 (f) and 12 (B) of the UGC Act 1956 is a
            premier constituent College of Patliputra University. College was
            established by great visionary Late Pt. Indu Shekhar Jha on the
            advice of Dr. Rajendra Prasad with a pious motive to make quality
            education accessible for aspiring youths without any discrimination
            based on socio-cultural-economic grounds. The vision of its great
            founder Pt. Indushekhar Jha was to make the commerce education
            accessible to the underprivileged and subaltern students of Bihar,
            which was rarely available. This revered institution started its
            journey from a small campus where P. N. Anglo School is located now
            to its present campus. Flowing in the incessant flow of imparting
            knowledge and being exposed to the warmth of time, this institution
            went on incorporating many streams in itself and today in this
            college education is imparted in the faculties of Sciences, Social
            Sciences, Commerce, Humanities and Law up to postgraduate levels.It
            is one of the oldest academic institutions located in the heart of
            the capital of Bihar, Patna. The College is situated in the
            exclusive neighbourhood of Rajendra Nagar Railway Terminal and
            inhabits a 5.89-acre plot campus. The lush green landscape invites
            an aesthetic charmer and enhances the College atmosphere to an
            educational eden.
          </p>
          <p className="text-justify">
            &nbsp;Initially, it was a constituent unit of Magadh University in
            the name of College of Commerce and was renamed as College of
            Commerce, Arts &amp; Science in 2016. Later, it became a constituent
            unit of the Patliputra University, Patna when this university was
            formed by the Bihar Government on 18 July 2018 after being
            bifurcated from Magadh University, Bodh Gaya. The College was
            re-accredited by NAAC as Grade 'A' in its second cycle of
            accreditation with a CGPA of 3.10 on a four-point scale. After the
            journey of more than seven decades this institution has achieved its
            mission and vision to a greater extent for which it was established
            and it is a matter of great satisfaction that today this institution
            is acclaimed throughout the state of Bihar for its high academic
            standards. The College has consistently demonstrated outstanding
            performance in academics, sports, and Co/extra-curricular
            activities. It has made significant and unparalleled contributions
            in terms of producing scholars, bureaucrats, intellectuals,
            politicians and sportsperson serving in different domains not only
            in our own country but even at international levels. Vibrant and
            effective presence of our alumni all over the world at key positions
            in almost all spheres of life is a testimony of its successful
            journey.
          </p>
          <p className="text-justify">
            College of Commerce, Arts and Science is opportune to have a galaxy
            of faculties who command a rare distinction in academic excellence
            at least in Bihar and whose accomplishments in academia is
            appreciated universally. The college dare claims to set new
            yardsticks in Bihar as far as quality research and teaching is
            concerned. Despite certain limitations which are beyond the college
            domain like space constraints, proper playground, etc., our students
            have excelled in various sports streams at different levels. No
            matter whether it is NCC or NSS or any other wing, this college has
            proven its worth.
          </p>
          <p className="text-justify">
            This college has excellent infrastructure with automated central
            library linked to world-wide free information flows and databases,
            well equipped laboratories and congenial and natural campus ambience
            and classrooms. However, the volume of publication in peer reviewed
            journals with high impact factor and citation index is moderate but
            the quality of research is worth citing. College administration is
            trying its best to catch it soon and increase the volume of research
            too. Teaching and research in all faculties of Sciences, Social
            Sciences, Humanities, Commerce and Law are available up to PG level.
            Ph. D. Programmes are also available in most subjects. The college
            offers 13 postgraduate, 17 undergraduate, 07 vocational, 03 Add-on
            (with certificate, diploma and advance diploma) and 04
            professional/self-financed courses. The college aspires to
            commensurate to the national and global standards in teaching as
            well as in research.
          </p>
          <p className="text-justify">
            Our institution visions to develop an educational set up to bring
            out a transformative change in the society by nurturing high moral
            and spiritual values in students, giving quality education in
            multiple disciplines, empowering the society through knowledge and
            quality research and fostering creativity and entrepreneurship in
            students and in this way making students a capable global citizen.
          </p>
          <p className="text-justify">
            All the stakeholders are working hard with full commitment with a
            mission to develop and maintain a human repository of knowledge,
            disseminating it among the students and creating new and relevant
            insights in diverse disciplines through state-of-the-art
            research.&nbsp; The college retains inspiring facets of its proud
            history and with an equally sharp gaze, it looks ahead to assimilate
            the exciting world of new knowledge as they go on unfolding. Our
            esteemed institution aims to inculcate positive human values in its
            students and making them capable global citizens, sensitive to human
            and environmental issues and at the same time quality professionals
            in their respective fields.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default About;
