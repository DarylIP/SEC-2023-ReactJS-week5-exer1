import { useParams } from "react-router-dom";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function Job() {
  const param = useParams();

  // create a function to filter element in JobData which id === param.id, return an object
  const filteredArray = JobData.filter((item) => String(item.id) === param.id);
  const [filteredJob] = filteredArray;

  // console.log(param);

  // destructuring
  // const array = [1, 2, 3];
  // console.log();

  // const [a, b, c, d, e] = array;
  // console.log(a, b, c, d, e);

  return (
    <div>
      <Header />
      <SubHeader />

      <div className="flex justify-center items-center py-[20px]">
        <div className="w-[700px]">
          <span className="cursor-pointer hover:underline underline-offset-2">
            Job
          </span>
          <span>/ </span>
          <a
            className="decoration-black hover:underline underline-offset-2"
            href=""
          >
            {" "}
            {filteredJob.job} - {filteredJob.company}
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="border px-[50px] py-[25px] rounded-md w-[700px] space-y-2">
          <div className="space-x-1">
            <p className="text-black text-sm bg-gray-200 px-2 py-1 inline-block capitalize rounded-md">
              {filteredJob.company_state}
            </p>
            {filteredJob.stacks.map((stack: string, index: number) => {
              return (
                <p
                  key={index}
                  className="bg-gray-200 px-2 py-1 inline-block rounded-md capitalize text-sm"
                >
                  {stack}
                </p>
              );
            })}
          </div>
          <h1 className="text-4xl font-bold">{filteredJob.job}</h1>
          <h2 className="font-light	">{filteredJob.company}</h2>
          <div>
            <p>📅 Posted on {filteredJob.post_date}</p>
            <p>📍 {filteredJob.district}</p>
            <p className="capitalize">💼 {filteredJob.work_type}</p>
            <p className="capitalize">🕔 Unspecified</p>
          </div>
          <div className="py-[30px]">
            <a href={filteredJob.link}>
              <button className="border rounded-md bg-blue-500 px-[50px] py-2 text-white font-bold">
                Apply Now 🚀
              </button>
            </a>
          </div>

          <h1 className="text-2xl font-bold pb-[30px]">✍️ Job Description</h1>
          <h2 className="text-xl font-bold">Job Expectation</h2>
          <p className="pr-[25px]">{filteredJob.details.job_description}</p>
          <h2 className="text-xl font-bold pt-[35px]">Qualification</h2>
          <p className="pr-[25px]">{filteredJob.details.qualification}</p>
          <div className="py-[30px]">
            <p className="pr-[25px]">{filteredJob.details.qualification}</p>
            <a href={filteredJob.link}>
              <button className="border rounded-md bg-blue-500 px-[50px] py-2 text-white font-bold mt-[30px]">
                Apply Now 🚀
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-[20px]">
        <div className="w-[700px] flex justify-center items-center my-[50px]">
          <span className="cursor-pointer hover:underline underline-offset-2 ">
            Applied but no response? Drop your resume here 📥
          </span>
        </div>
      </div>
    </div>
  );
}
export default Job;
