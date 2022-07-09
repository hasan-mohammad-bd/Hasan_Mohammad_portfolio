import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CoverLetter = () => {
  const { register, handleSubmit, reset } = useForm();
  const [companyName, setCompanyName] = useState("______");
  const [position, setPosition] = useState("______");
  const [jobPostPlatform, setJobPostPlatform] = useState("______");
  const [skill, setSkill] = useState("______");
  const [companyAchivement, setComapnayAchivement] = useState("______");
  const [softSkill, setSoftSkill] = useState("______");
  const [side, setSide] = useState("______");
  const [productToMake, setProductMake] = useState("______");
  const linkedin = "https://www.linkedin.com/in/hasan19947/";
  const gitHub = "https://github.com/hasan-mohammad-bd";
  const prosonalPortfolio = "https://hasan-mohammad.web.app/";
  const cloudia = "https://manufacturer-app-dff29.web.app/";
  const dhakaBakery = "https://inventory-app-6da6a.web.app/";
  const photographyApp = "https://photography-web-app-58ab5.web.app/";



  const onSubmit = (data) => {
    setCompanyName(data.companyName);
    setPosition(data.position);
    setJobPostPlatform(data.platform);
    setSide(data.side);
    setSkill(data.skill);
    setProductMake(data.product);
    setComapnayAchivement(data.achievements);
    // setSoftSkill(data.softSkill)
    reset();
  };

  return (
    <div className=" h-screen bg-white flex justify-center  flex-col container mx-auto">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Company Name"
            {...register("companyName", { required: false })}
          />
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Position"
            {...register("position", { required: false })}
          />
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Job Posting platform"
            {...register("platform", { required: false })}
          />
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Full-stack/Front-end"
            {...register("side", { required: false })}
          />
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Required Skill"
            {...register("skill", { required: false })}
          />
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Product to make"
            {...register("product", { required: false })}
          />
          <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Company Achievements"
            {...register("achievements", { required: false })}
          />
          {/* <input
            className="input w-full max-w-xs input-bordered mb-2 input-success"
            type="text"
            placeholder="Soft Skill"
            {...register("softSkill", { required: false })}
          /> */}
          <input
            className="btn btn-accent input w-full max-w-xs"
            type="submit"
          />
        </form>
      </div>
      <h2>Linkedin: https://www.linkedin.com/in/hasan19947/</h2>
      <h2 className="text-3xl font-bold my-5">Cover Letter</h2>
      <div id="text">

        <p className="text-black text-xs text-left">

          Dear Hiring Team, <br />I am pleased to be applying for the {position}{" "}
          position at {companyName} as posted on {jobPostPlatform}.
          <br />
          <br />
          My extensive experience in {side} development specializing in {skill},
          and building {productToMake} that excellently fit with the position
          requirement as advertised.
          <br />
          <br />
          Your {companyAchivement} really motivate me and I feel my competence
          in teamwork, technical communication, and problem-solving would be a
          great benefit to the {companyName}.
          <br />
          <br />I would be grateful to you for the time to review my
          application. Please find my resume attached. I look forward to hearing
          from you soon.
          <br />
          <br />
          Best Regards, <br />
          Hasan Mohammad <br />
          Phone: +8801688861610 <br />
          Email: hasan.md.east@gmail.com
        </p>
      </div>
    </div>
  );
};

export default CoverLetter;
