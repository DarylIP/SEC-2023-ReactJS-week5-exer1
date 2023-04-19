import { useNavigate } from "react-router-dom";
import { HOMEURL } from "../constant/config";

function JobCard(props: any) {
  // function to detect if year is 2023, isNew === true
  const date = new Date(props.post_date);
  const isNew = date.getFullYear() === 2023;
  // console.log(isNew);

  // navigate function
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(HOMEURL + `/job/${props.id}`);
      }}
      className="flex justify-center items-center cursor-pointer"
    >
      <div className="border p-4 rounded-md w-[480px] space-y-2">
        <h4 className="text-xl font-medium inline-block">{props.job}</h4>
        {/* conditioning rendering here, render if isNew === true by using tenary operator*/}
        {isNew ? (
          <span className="bg-blue-300 rounded-md p-1 m-1">New</span>
        ) : null}

        <p>{props.company}</p>
        <div>
          <p>📅 Posted on {props.post_date}</p>
          <p>📍 {props.district}</p>
          <p className="capitalize">💼 {props.work_type}</p>
        </div>
        <div className="space-x-1">
          <p className="bg-gray-200 px-2 py-1 inline-block rounded-md">
            {props.company_state}
          </p>

          {props.stacks.map((stack: string, index: number) => {
            return (
              <p
                key={index}
                className="bg-gray-200 px-2 py-1 inline-block rounded-md capitalize"
              >
                {stack}
              </p>
            );
          })}
        </div>
        <p>Added on {props.post_date}</p>
      </div>
    </div>
  );
}

export default JobCard;
