import { Download, BookOpen, Code, Briefcase, GraduationCap } from 'lucide-react';

export default function ResumePage() {
  // You can replace this with your actual resume URL
  const resumeUrl = "/path-to-your-resume.pdf";

  const skills = {
    technical: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git"],
    softSkills: ["Problem Solving", "Team Collaboration", "Communication"],
    tools: ["VS Code", "GitHub", "Gitlab", "PostMan"]
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Header with Download Button */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Resume</h1>
          <p className="text-gray-600">My skills and qualifications</p>
        </div>
        <a
          href={resumeUrl}
          download
          className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download size={20} />
          Download Resume
        </a>
      </div>

      {/* Skills Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Technical Skills */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Code className="text-blue-600" size={24} />
            <h2 className="text-xl font-semibold">Technical Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.technical.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-green-600" size={24} />
            <h2 className="text-xl font-semibold">Tools & Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-purple-600" size={24} />
            <h2 className="text-xl font-semibold">Soft Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.softSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-orange-600" size={24} />
            <h2 className="text-xl font-semibold">Education</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">University of the West Indies</h3>
              <p className="text-gray-600">Bachelor's in Food Chemistry</p>
              <p className="text-sm text-gray-500">2010 - 2016</p>
            </div>
            {/* Add more education items as needed */}
          </div>
        </section>
      </div>

      {/* Optional: Additional Information */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-600">
          Feel free to download my complete resume for more detailed information
          about my work experience, projects, and achievements. If you have any
          questions, don't hesitate to reach out through the contact form.
        </p>
      </div>
    </div>
  );
}