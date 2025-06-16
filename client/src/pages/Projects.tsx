import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "Get Me a Coffee",
      github: "https://github.com/YashShedge503/Get-me-a-Coffee",
      live: "https://get-me-a-coffee.onrender.com/",
      techStack: ["Next.js", "MongoDB", "Tailwind CSS", "Razorpay API", "NextAuth.js"],
      overview: "A donation platform for content creators with GitHub login authentication and secure payment integration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Mental Health Chatbot",
      github: "https://github.com/YashShedge503/Mental_health_chatbot",
      techStack: ["Python", "LangChain", "ChromaDB", "HuggingFace", "Gradio"],
      overview: "An AI-powered chatbot using LLaMA-3.3 for contextual, supportive mental health conversations.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "CampusIQ",
      github: "https://github.com/YashShedge503/CampusIQ",
      techStack: ["Flask", "SQLite", "OpenCV", "HTML/CSS/JavaScript"],
      overview: "Role-based ERP for education with facial recognition attendance and performance analytics.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Expense Split",
      github: "https://github.com/YashShedge503/Expense_split",
      techStack: ["Python", "Flask"],
      overview: "Backend project to fairly manage and split shared expenses among groups.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Hiring Assistant Chatbot",
      github: "https://github.com/YashShedge503/Hiring_assistant_chatbot",
      techStack: ["Python", "NLP"],
      overview: "A chatbot assistant that filters candidates and generates intelligent responses for HR.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Amazon Review Recommendation System",
      github: "https://github.com/YashShedge503/Amazon_Review_Based_Recommendation_System",
      techStack: ["Python", "NLP", "Machine Learning"],
      overview: "Recommender system that uses sentiment analysis on Amazon reviews to suggest products.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "AI Assistant Jarvis",
      github: "https://github.com/YashShedge503/AI_Assistant_Jarvis",
      techStack: ["Python", "SpeechRecognition", "gTTS"],
      overview: "Voice-activated assistant capable of responding to commands and automating desktop tasks.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Plant Disease Detection System",
      github: "https://github.com/YashShedge503/Plant_Disease_Detection_System",
      techStack: ["OpenCV", "scikit-learn"],
      overview: "Identifies plant diseases using image classification techniques and machine learning.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      name: "Auto Reply ChatBot",
      github: "https://github.com/YashShedge503/Auto_Reply_ChatBot",
      techStack: ["Python", "PyAutoGUI", "OpenAI API"],
      overview: "Automatically reads messages and replies in real-time using AI-generated responses.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-br from-surface to-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A showcase of my latest work in AI, full-stack development, and innovative solutions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-surface/50 backdrop-blur-sm border-surface-light hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/10 h-full">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={`${project.name} interface`}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                    <p className="text-gray-300 mb-4">{project.overview}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/20 text-accent hover:bg-primary/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-gray-600 hover:border-primary text-gray-300 hover:text-white"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                      {project.live && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            asChild
                            size="sm"
                            className="bg-primary hover:bg-secondary text-white"
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;