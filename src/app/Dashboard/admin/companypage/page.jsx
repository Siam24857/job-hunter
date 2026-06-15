import CompanyApprovalTable from "../../../component/Companisepagetable";
import { getallcomapysdata } from "@/app/lib/Dataaccses/api";
 

const Companypage = async () => {
  const companies = await getallcomapysdata();

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Company Approval
        </h1>

        <p className="text-default-500">
          Review and manage company requests
        </p>
      </div>

      <CompanyApprovalTable companies={companies} />
    </div>
  );
};

export default Companypage;