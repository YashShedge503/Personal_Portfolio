import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence and Data Science",
      institution: "Vishwakarma Institute of Information Technology, Pune",
      year: "2022 - 2026",
      grade: "CGPA: 8.4",
      color: "primary"
    },
    {
      degree: "12th Grade - CBSE",
      field: "Science Stream",
      institution: "Blossom Public School, Pune",
      year: "2022",
      grade: "78.8%",
      color: "secondary"
    },
    {
      degree: "10th Grade - CBSE",
      field: "Secondary Education",
      institution: "Blossom Public School, Pune",
      year: "2020",
      grade: "90.4%",
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-br from-dark to-surface py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about creating innovative solutions that bridge the gap between artificial intelligence and real-world applications.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            {education.map((item, index) => (
              <div key={index} className="relative flex items-center mb-12">
                <div className={`absolute left-6 w-4 h-4 bg-${item.color} rounded-full border-4 border-dark`}></div>
                <Card className="ml-20 bg-surface/50 backdrop-blur-sm border-surface-light hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <div className="flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                      </div>
                      <div className="flex items-center text-accent font-medium">
                        <Calendar className="mr-1 h-4 w-4" />
                        {item.year}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-2">{item.field}</p>
                    <p className="text-gray-400 mb-2">{item.institution}</p>
                    <Badge
                      variant="secondary"
                      className="bg-primary/20 text-accent"
                    >
                      {item.grade}
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
