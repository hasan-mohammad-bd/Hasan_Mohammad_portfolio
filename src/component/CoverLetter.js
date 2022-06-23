import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CoverLetter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [companyName, setCompanyName] = useState("______");
  const [position, setPosition] = useState("______");
  const [jobPostPlatform, setJobPostPlatform] = useState("______");
  const [skill, setSkill] = useState("______");
  const [companyAchivement, setComapnayAchivement] = useState("______");
  const [softSkill, setSoftSkill] = useState("______");
  const [side, setSide] = useState("______");
  const [productToMake, setProductMake] = useState("______");



  return (
    <div className=" h-screen bg-white flex justify-center items-center flex-col">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("firstName")} />
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <input type="submit" />
        </form>
      </div>
      <h2 className="text-3xl font-bold my-5">Cover Letter</h2>
      <p>
        I am pleased to be applying for the {position} at {companyName} as
        posted on {jobPostPlatform}.
        <br />
        <br />
        My extensive experience in {side} development specializing in {skill}{" "}
        and building {productToMake} that excellently fit with the position
        requirement as advertised.
        <br />
        <br />
        Your {companyAchivement} really motivate me and feel my competence in{" "}
        {softSkill} would be a great benefit to the {companyName}.
        <br />
        <br />I am grateful to you for the time in reviewing my application.
        Please find my resume attached. I look forward to hearing from you soon.
      </p>
    </div>
  );
};

export default CoverLetter;
