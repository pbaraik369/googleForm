import { BsCloudCheck } from "react-icons/bs";
import { BiUpload } from "react-icons/bi";
import "./googleDoc.css";
const GoogleDoc = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-[700px] mt-5" onSubmit={submitHandler}>
      {/* -------------------Header ------------ */}
      <div className="rounded-md  border-spacing-1 border-gray-400 bg-white ">
        <div className="w-[700px] h-[10px] bg-[#673AB7]"></div>
        <h1 className="m-1 p-4 text-4xl ">Assignment Task</h1>
        <hr />
        <div className="flex  justify-between items-center p-3">
          <div>
            <span className=" font-semibold text-[#626468] m-1 p-1">
              pankaj.b81972@gmail.com
            </span>
            <span className=" text-blue-500">
              <button>Switch accounts</button>
            </span>
          </div>
          <div className="flex justify-around items-center text-[#626468] ">
            <BsCloudCheck className=" text-2xl mr-5" />
            <span className="text-sm">Draft saved</span>
          </div>
        </div>
        <div className="m-1 p-4 text-[#626468]">
          <p>
            The name and photo associated with your Google Account will be
            recorded when you upload files and submit this form. Your email
            address is not part of your response.
          </p>
        </div>
        <hr />
        <div className="m-1 p-4 text-[#DD4A33]">
          <sup className="p-1">*</sup>
          <span>Indicates required question</span>
        </div>
      </div>

      {/* ---------------------MCQ------------ */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div className="">
          <span>MCQ</span>
          <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <div className="mt-5 transition duration-200 ease-in-out ml-1">
          <input type="radio" name="radiobtn" />
          <span className="ml-3 ">Option 1</span>
          <br />
          <br />
          <input type="radio" name="radiobtn" />
          <span className="ml-3 ">Option 2</span>
          <br />
          <br />
          <input type="radio" name="radiobtn" />
          <span className="ml-3 ">Option 3 </span>
          <br />
          <br />
        </div>
      </div>
      {/* -----------------CheckBox---------------------- */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div>
          <span>Checkbox</span>
          <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <div className="mt-5 transition duration-200 ease-in-out ml-1">
          <input type="checkbox" />
          <span className="ml-3 ">Option 1</span>
          <br /> <br />
          <input type="checkbox" />
          <span className="ml-3 ">Option 2</span> <br /> <br />
          <input type="checkbox" />
          <span className="ml-3 ">Option 3 </span>
          <br />
          <br />
        </div>
      </div>

      {/* --------------short Answer---------- */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div>
          <span>Short Answer</span> <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <input
          className="mt-10 w-[50%] outline-none border-b-2"
          type="text"
          placeholder="Your Answer"
        />
      </div>
      {/* ---------------paraGraph------------- */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div>
          <span>ParaGraph</span> <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <input
          type="text"
          className="mt-10 w-[100%] outline-none border-b-2"
          placeholder="Your Answer"
        />
      </div>

      {/* ---------Drap down--------- */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div>
          <span>Drop down</span>
          <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <select className="mt-6 rounded-md border border-gray-200 p-5 pl-10 pr-10 outline-none ">
          <option className="" value="option1">
            option 1
          </option>
          <option className="" value="option2">
            option 2
          </option>
          <option className="" value="option3">
            option 3
          </option>
        </select>
      </div>
      {/* -----------file upload------------ */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div>
          <span>File Upload</span>
          <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <button className="p-4 text-blue-500 border border-gray-200 flex items-center ">
          <BiUpload />
          <span className="p-1">Add File</span>
        </button>
      </div>
      {/* ------------Linear Scale------------ */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div>
          <span>Linear Scale</span>
          <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <div className="mt-5 flex justify-between items-end">
          <span className="">Worst</span>
          <div className="flex justify-between items-center w-[300px]">
            <div className="flex flex-col">
              <span className="flex justify-between items-center h-20">1</span>
              <input type="radio" name="radioScale" />
            </div>
            <div className="flex flex-col">
              <span className="flex justify-between items-center h-20">2</span>
              <input type="radio" name="radioScale" />
            </div>
            <div className="flex flex-col">
              <span className="flex justify-between items-center h-20">3</span>
              <input type="radio" name="radioScale" />
            </div>
            <div className="flex flex-col">
              <span className="flex justify-between items-center h-20">4</span>
              <input type="radio" name="radioScale" />
            </div>
            <div className="flex flex-col">
              <span className="flex justify-between items-center h-20">5</span>
              <input type="radio" name="radioScale" />
            </div>
          </div>
          <span>Best</span>
        </div>
      </div>

      {/* -----------multi choice grid-------------- */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div className="mb-10">
          <span>Multi choice Grid</span>
          <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <table className="w-[100%] text-center">
          <tr>
            <td></td>
            <td>Column 1</td>
            <td>Column 2</td>
            <td>Column 3</td>
          </tr>
          <tr className=" bg-violet-50">
            <td className=" p-6 rounded-md ">Row 1</td>
            <td>
              <input type="radio" name="radioGrid" />
            </td>
            <td>
              <input type="radio" name="radioGrid" />
            </td>
            <td>
              <input type="radio" name="radioGrid" />
            </td>
          </tr>
          <tr className=" bg-violet-50 mt-1">
            <td className="p-6 rounded-md">Row 2</td>
            <td>
              <input type="radio" name="radioGridRow2" />
            </td>
            <td>
              <input type="radio" name="radioGridRow2" />
            </td>
            <td>
              <input type="radio" name="radioGridrOW2" />
            </td>
          </tr>
          <tr className=" bg-violet-50 ">
            <td className=" p-6 rounded-md">Row 3</td>
            <td>
              <input type="radio" name="radioGridRow3" />
            </td>
            <td>
              <input type="radio" name="radioGridRow3" />
            </td>
            <td>
              <input type="radio" name="radioGridRow3" />
            </td>
          </tr>
        </table>
      </div>

      {/* -----------------tick box grid------------- */}
      <div className="mt-5 bg-white rounded-md m-1 p-4">
        <div className="mb-10">
          <span>Tick box Grid</span>
          <sup className="p-1 text-[#DD4A33]">*</sup>
        </div>
        <table className="w-[100%] text-center">
          <tr>
            <td></td>
            <td>Column 1</td>
            <td>Column 2</td>
            <td>Column 3</td>
          </tr>
          <tr className=" bg-violet-50">
            <td className=" p-6 rounded-md">Row 1</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr className=" bg-violet-50">
            <td className=" p-6 rounded-md">Row 2</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr className=" bg-violet-50">
            <td className=" p-6 rounded-md">Row 3</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        </table>
      </div>
      {/* -------------button----------- */}
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <button className="bg-[#673AB7] text-white p-2 rounded-md pl-6 pr-6">
            Submit
          </button>
          <div className="flex justify-between items-center w-[300px]">
            <div className="w-[70%] h-[10px] bg-green-600 rounded-md"></div>
            <p>Page 1 of 1</p>
          </div>
          <button className="text-[#673AB7]">Clear form</button>
        </div>
      </div>
      {/* -----------------------footer------------- */}
      <div className="mt-5">
        <p className="text-sm">Never submit passwords through Google Forms.</p>
      </div>
      <div className="mt-5">
        <p className="text-sm">
          {"   "} This content is neither created nor endorsed by Google.
          <span className="underline"> Report Abuse</span> -
          <span className="underline">Terms of Service</span> -
          <span className="underline">Privacy Policy</span>
        </p>
      </div>
      <div className="mt-5 text-center">
        <p className="">
          <span className=" text-3xl font-medium text-[#626468] tracking-wider">
            Google
          </span>
          <span className="text-2xl text-[#626468]"> Forms</span>
        </p>
      </div>
    </form>
  );
};

export default GoogleDoc;
