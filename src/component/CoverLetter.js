import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CoverLetter = () => {
  const { register, handleSubmit,reset } = useForm();
  const [companyName, setCompanyName] = useState("______");
  const [position, setPosition] = useState("______");
  const [jobPostPlatform, setJobPostPlatform] = useState("______");
  const [skill, setSkill] = useState("______");
  const [companyAchivement, setComapnayAchivement] = useState("______");
  const [softSkill, setSoftSkill] = useState("______");
  const [side, setSide] = useState("______");
  const [productToMake, setProductMake] = useState("______");

  const onSubmit = data => {
    setCompanyName(data.companyName);
    setPosition(data.position);
    setJobPostPlatform(data.platform);
    setSide(data.side);
    setSkill(data.skill);
    setProductMake(data.product);
    setComapnayAchivement(data.achievements)
    // setSoftSkill(data.softSkill)
    reset()
  }

  return (
    <div className=" h-screen bg-white flex justify-center items-center flex-col container mx-auto">
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
      <h2 className="text-3xl font-bold my-5">Cover Letter</h2>
      <p>
        I am pleased to be applying for the {position} position at {companyName} as
        posted on {jobPostPlatform}.
        <br />
        <br />
        My extensive experience in {side} development specializing in {skill},
        and building {productToMake} that excellently fit with the position
        requirement as advertised.
        <br />
        <br />
        Your {companyAchivement} really motivate me and I feel my competence in teamwork, technical communication, and problem-solving would be a great benefit to the {companyName}.
        <br />
        <br />I would be grateful to you for the time to review my application. Please find my resume attached. I look forward to hearing from you soon.
      </p>
    </div>
  );
};

export default CoverLetter;
