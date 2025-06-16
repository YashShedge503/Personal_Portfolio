import { Code2, Layers, Database, Wrench, Users, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "text-primary",
      skills: ["Python", "C++", "C", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks",
      icon: Layers,
      color: "text-secondary",
      skills: ["React", "PyTorch", "Flask", "Next.js"]
    },
    {
      title: "Libraries",
      icon: Box,
      color: "text-accent",
      skills: ["Pandas", "NumPy", "Matplotlib", "sklearn", "TensorFlow", "OpenCV", "SpeechRecognition"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-primary",
      skills: ["MongoDB", "MySQL", "SQLite"]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "text-secondary",
      skills: ["Power BI", "Tableau", "Excel", "Arduino IDE", "Git"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-accent",
      skills: ["Teamwork", "Communication", "Project Management", "Stakeholder Management"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-br from-surface to-dark py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across various domains of software development and AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={index}
                  className="bg-surface/50 backdrop-blur-sm border-surface-light hover:border-primary/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <IconComponent className={`h-6 w-6 ${category.color} mr-3`} />
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/20 text-accent hover:bg-primary/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
