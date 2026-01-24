import React, { useState } from "react";
import "./SmpOpenPositions.css";

const jobsData = [
  {
    id: 1,
    title: "Copywriter (Digital Marketing & B2B)",
    location: "India",
    department: "Content Writer",
    type: "Full Time Contract Position",
    skills: ["SEO Writing", "B2B Content", "Blog Writing"],
    experience: "Fresher / 1+ Years",
    role: "Create engaging digital marketing and B2B content."
  },
  {
    id: 2,
    title: "Copywriter (Digital Marketing & B2B)",
    location: "Kenya",
    department: "Content Writer",
    type: "Full Time Contract Position",
    skills: ["Content Strategy", "SEO", "Research"],
    experience: "1+ Years",
    role: "Write optimized marketing copy for digital platforms."
  },
  {
    id: 3,
    title: "Web Designer",
    location: "Kenya",
    department: "Web Designer",
    type: "Full Time Contract Position",
    skills: ["Figma", "UI/UX", "HTML/CSS"],
    experience: "1+ Years",
    role: "Design modern, user-friendly websites."
  },
  {
    id: 4,
    title: "React Developer",
    location: "India",
    department: "RND",
    type: "Full Time Contract Position",
    skills: ["React", "JavaScript", "API Integration"],
    experience: "2+ Years",
    role: "Develop and maintain scalable React applications."
  }
];

const SmpOpenPositions = () => {
  const [location, setLocation] = useState("All");
  const [department, setDepartment] = useState("All");
  const [activeJob, setActiveJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const filteredJobs = jobsData.filter(job =>
    (location === "All" || job.location === location) &&
    (department === "All" || job.department === department)
  );

  return (
    <div className="smp-open-positions">
      {/* Filters */}
      <div className="left-smp-filbox">
      <div className="smp-filters">
        <select value={location} onChange={e => setLocation(e.target.value)}>
          <option value="All">All locations</option>
          <option value="India">India</option>
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
        </select>

        <select value={department} onChange={e => setDepartment(e.target.value)}>
          <option value="All">All departments</option>
          <option value="SEO">SEO</option>
          <option value="SMO">SMO</option>
          <option value="Graphic Designer">Graphic Designer</option>
          <option value="RND">RND</option>
          <option value="Sales">Sales</option>
          <option value="Content Writer">Content Writer</option>
          <option value="PHP Web Developer">PHP Web Developer</option>
          <option value="Web Designer">Web Designer</option>
        </select>
      </div>
      </div>

      {/* Job List */}
      <div className="smp-job-list">
        {filteredJobs.length === 0 && (
          <p className="no-jobs">No positions available.</p>
        )}

        {filteredJobs.map(job => (
          <div key={job.id} className="smp-job-card">
            <div
              className="smp-job-header"
              onClick={() =>
                setActiveJob(activeJob === job.id ? null : job.id)
              }
            >
              <h4>{job.title} ({job.location})</h4>
              <span>{job.type}</span>
            </div>

            {activeJob === job.id && (
              <div className="smp-job-body">
                <p><strong>Skills:</strong> {job.skills.join(", ")}</p>
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Job Role:</strong> {job.role}</p>

                <button
                  className="smp-apply-btn"
                  onClick={() => {
                    setShowForm(true);
                    setSelectedJob(job.title);
                  }}
                >
                  Apply Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Apply Form Modal */}
      {showForm && (
        <div className="smp-modal">
          <div className="smp-modal-box">
            <h3>Apply for {selectedJob}</h3>

            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <input type="file" className="uploadyourcv"/>

            <div className="smp-modal-actions">
              <button className="smp-submit">Submit</button>
              <button className="smp-close"  onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmpOpenPositions;
