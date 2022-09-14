import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const client = axios.create({
  baseURL: "https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev",
  headers: {
    accept: "application/json",
    "x-api-key": "RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch",
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
    "Access-Control-Allow-Origin": true,
  },
});

const Projects = () => {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await client.get("/fundraising");
      setRes(response.data);

      if (res) {
        setProjects(res.data);
        setLoading(false);
      }
    };
    getData();
  }, []);

  console.log(projects);

  return (
    <div className="projects">
      <div className="title">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 44">
          <rect x="19" y="17" width="14" height="14" rx="2" fill="#818BE9" />
          <rect y="7" width="8" height="8" rx="2" fill="#E9A681" />
          <path
            d="M44.31 16c.933 0 1.7-.76 1.6-1.688A16 16 0 0 0 27.384.215c-.921.153-1.448 1.094-1.2 1.994.25.9 1.181 1.416 2.107 1.29a12.618 12.618 0 0 1 14.215 10.815c.125.926.87 1.686 1.804 1.686Z"
            fill="url(#a)"
          />
          <circle cx="8" cy="41" r="3" fill="#EF6EE2" />
          <defs>
            <linearGradient id="a" x1="30" y1="0" x2="40.353" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#818BE9" />
              <stop offset="1" stopColor="#EF6EE2" />
            </linearGradient>
          </defs>
        </svg>

        <h1>Projects</h1>
      </div>

      {loading || !res ? (
        <div class="spinner-box">
          <div class="three-quarter-spinner"></div>
        </div>
      ) : (
        <div className="cards">
          {projects.map((project) => {
            console.log(project.id);
            return <Card project={project} client={client} key={project.id} />;
          })}
        </div>
      )}

      <button>More Projects</button>
    </div>
  );
};

export default Projects;
