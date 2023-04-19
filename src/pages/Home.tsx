import JobCard from "../components/JobCard";
import MyBlackButton from "../components/MyBlackButton";
import MyButton from "../components/MyButton";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

function Home() {
  // import job json data
  // using the data tp replicate job card
  // console.log(JobData);

  // every react function must return a TSX
  return (
    <div>
      {/* header */}
      <Header />
      {/* SubHeader */}
      <SubHeader />
      {/* hero */}
      <div className="flex flex-col justify-items-center items-center py-[40px] space-y-4 ">
        <h1 className="text-4xl font-bold">
          Find Tech Jobs in Malaysia <span>MY</span>
        </h1>
        <p>Let employers find you. Or apply to companies directly.</p>
        <div>
          <MyBlackButton text="🎯I want company to find me" />
          <MyButton text="🔍 Search Jobs" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-2 mx-44">
        {/* job cards */}
        {JobData.map((props) => {
          return <JobCard {...props} />;
        })}
      </div>
    </div>
  );
}

export default Home;
