import React, { useEffect, useState } from "react";

const ProjectNew = ({ project }) => {
  const [project2, setProject] = useState({});
  // const {name, img, technology, Description, _id} = project;
  console.log(project._id);

  useEffect(() => {
    fetch(`https://radiant-lake-65921.herokuapp.com/project/${project._id}`)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  const {
    name,
    img,
    img2,
    img3,
    img4,
    technology,
    Description,
    Description2,
    Description3,
    Description4,
    Description5,
    _id,
    liveLink,
    serverLink,
    clientLink,
  } = project2;

  return (
    <div className="text-start">
      <div class="wrapper">
        <div class="container1" id="c0">
          <div class="image" id="i0">
            <div class="city">
              <label for="projectModal" class="">
                <img
                  for="projectModal"
                  className="w-100 cursor-pointer"
                  title="click for details"
                  src={project.img}
                  alt=""
                />
              </label>
            </div>
          </div>
          <div class="story" id="s0">
            <div class="info">
              <h3>{project.name}</h3>
              <p>{project.Description}</p>
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="projectModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box  max-w-3xl">
          <div className="hero-content">
            <div className="md:w-[600px]">
              <div className="">
                <div class="carousel w-full">
                  <div id="slide1" class="carousel-item relative w-full my-5">
                    <img className="w-100" src={img2} />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" class="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" class="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" class="carousel-item relative w-full">
                    <img className="w-100" src={img3} />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" class="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" class="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" class="carousel-item relative w-full">
                    <img className="w-100" src={img4} />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" class="btn btn-circle bb">
                        ❮
                      </a>
                      <a href="#slide1" class="btn btn-circle bb">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="text-2xl font-bold mt-5">{name}</h6>
              <h6 className="py-6">
                <span className="font-bold">Technology Used: </span>
                {technology}
              </h6>
              <h6 className="py-6">
                <span className="font-bold">Overview: </span>
              </h6>
              <ul className="des-list ml-5 mb-5">
                <li>{Description}</li>
                <li>{Description2}</li>
                <li>{Description3}</li>
                <li>{Description4}</li>
                <li>{Description5}</li>
              </ul>

              <div className="flex">
                  <a className="btn1" target="_blank" href={liveLink}>Live Link</a>


                  <a className="btn1 ml-3"  target="_blank" href={serverLink}>Client Side Code</a>


                  <a className="btn1 ml-3"  target="_blank" href={clientLink}>Server Side Code</a>

              </div>
            </div>
          </div>
          <div class="modal-action">
          <label for="projectModal" title="Close the Tab" class="btn btn-sm btn-circle absolute right-2 top-2 bg-red-600">✕</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNew;
