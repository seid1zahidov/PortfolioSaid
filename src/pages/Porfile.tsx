import "../assets/scss/Porfile/Porfile.css";
import '../assets/global/global.css';
import { GoArrowUpRight } from "react-icons/go";
function Profile() {
  return (
    <section className="Main-Portfolio">
      <div className="container">
        <div className="center">
          <ul id="Responsive_UL">
            <li>Hi!</li>
            <li>I hope my website finds you well.</li>
            <li style={{ color: "#000000", fontWeight: "700" }}>
              I am Said Zahidov, a creative developer with experience in
              frontend development.
            </li>
            <li>
              Motivated and fast-learning developer with hands-on experience in
              modern web technologies including React, Next.js, Tailwind CSS,
              and MongoDB. I've built freelance projects from scratch,
              collaborating with clients to turn ideas into working
              applications. I'm now ready to bring my skills into a company
              environment where I can contribute to a team, learn from
              experienced developers, and grow as a professional.
            </li>
            <li>Please feel free to reach out to me about collaborations.</li>
            <li>Looking forward to hearing from you.</li>
          </ul>
          <div className="cta-row">
            <button className="cta-btn red">
              Get in touch <GoArrowUpRight />
            </button>
            <button className="cta-btn resume">
              Resume <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
