import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import { FaGithub, FaDocker, FaPython, FaNodeJs, FaLinux, FaJava, FaGitlab, FaAws } from "react-icons/fa";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val) => (
            <>
              {/* Section Gauche avec une Image */}
              <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="About" className="about-img" />
              </div>

              {/* Section Droite avec un Texte Plus Concis */}
              <div className="right" data-aos="fade-down-left">
                <Heading title="Que savoir à propos de moi?" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                {/* Ajout d'Icônes pour les Compétences Techniques */}
                <h3>Technologies utilisées :</h3>
                <div className="tech-grid">
                  <FaGithub title="GitHub" />
                  <FaGitlab title="GitLab" />
                  <FaDocker title="Docker" />
                  <FaPython title="Python" />
                  <FaNodeJs title="NodeJS" />
                  <FaLinux title="Linux" />
                  <FaJava title="Java" />
                  <FaAws title="AWS" />
                </div>
              </div>
              <a href="EmmanuellaDjeufa_CurriculumVitae-1.pdf" download="EmmanuellaDjeufa_CurriculumVitae-1.pdf">
                  <button className="primaryBtn" data-aos="fade-up-right">
                    Télécharger mon CV
                  </button>
              </a>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
