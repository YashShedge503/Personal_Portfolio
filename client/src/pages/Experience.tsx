import { Building2, Award, Trophy, ChevronRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Artificial Intelligence Research Intern",
      company: "HCL Tech",
      duration: "Aug 2024 – Jan 2025",
      achievements: [
        "Boosted model accuracy by 30% for manufacturing insights using OCR and LLAMA models.",
        "Extracted rules and tables from complex DFM Pro PDF documents using layout-aware NLP pipelines.",
        "Fine-tuned DistilBERT on domain-specific datasets to achieve 98% accuracy.",
        "Built dashboards and performance visualizations using Matplotlib to compare model outputs.",
        "Worked closely with engineering teams to align AI results with industrial requirements."
      ]
    },
    {
      title: "Project Lead",
      company: "IoT Forum VIIT",
      duration: "Aug 2023 – Mar 2025",
      achievements: [
        "Built a facial recognition attendance system with real-time data capture using IoT devices.",
        "Conducted market research on IoT in healthcare, uncovering tech trends and adoption barriers.",
        "Coordinated multi-member teams for smooth project delivery.",
        "Led a workshop on building self-driving car prototypes, engaging over 50 students."
      ]
    }
  ];

  const certifications = [
    {
      name: "Machine Learning with Python",
      issuer: "LinkedIn"
    },
    {
      name: "SAP Technology Consultant",
      issuer: "Coursera"
    }
  ];

  const achievements = [
    {
      name: "Top 10 – HackSplosion (SPIT)",
      description: "Fullstack Track"
    },
    {
      name: "Second Runner-up",
      description: "Departmental Hackathon (AI/ML category)"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-br from-dark to-surface py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Experience & Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional experience, certifications, and achievements that shaped my career journey.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="bg-surface/50 backdrop-blur-sm border-surface-light hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex items-start">
                        <Building2 className="mr-3 h-6 w-6 text-primary mt-1" />
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                          <p className="text-primary font-medium text-lg">{exp.company}</p>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-accent/20 text-accent mt-2 md:mt-0"
                      >
                        <Calendar className="mr-1 h-3 w-3" />
                        {exp.duration}
                      </Badge>
                    </div>
                    <ul className="text-gray-300 space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <ChevronRight className="text-primary mt-1 mr-3 h-4 w-4 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="bg-surface/50 backdrop-blur-sm border-surface-light">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="text-primary mr-3 h-6 w-6" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-white">{cert.name}</h4>
                      <p className="text-gray-400">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-surface/50 backdrop-blur-sm border-surface-light">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Trophy className="text-accent mr-3 h-6 w-6" />
                  Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold text-white">{achievement.name}</h4>
                      <p className="text-gray-400">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
