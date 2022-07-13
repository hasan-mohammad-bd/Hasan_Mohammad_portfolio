import React from 'react';

const ProjectModal = ({project2}) => {
    console.log(project2);
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
        <div>
                  <input type="checkbox" id="projectModal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box  max-w-3xl">
        <label for="projectModal" class="btn btn-sm btn-circle sticky right-2 top-2 bb">✕</label>
          <div className="hero-content">
            <div className="md:w-[600px]">
              <div className="">
                <div class="carousel w-full">
                  <div id="slide1" class="carousel-item relative w-full my-5">
                    <img className="w-100" src={img2} />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" class="btn btn-sm btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" class="btn btn-sm btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" class="carousel-item relative w-full">
                    <img className="w-100" src={img3} />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" class="btn btn-sm btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" class="btn btn-sm btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" class="carousel-item relative w-full">
                    <img className="w-100" src={img4} />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" class="btn btn-sm btn-circle bb">
                        ❮
                      </a>
                      <a href="#slide1" class="btn btn-sm btn-circle bb">
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
          </div>
        </div>
      </div>
        </div>
    );
};

export default ProjectModal;