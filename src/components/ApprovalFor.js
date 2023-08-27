import React from 'react';
import useCall from './useCall';

const ApprovalFor = () => {
  const approveCall = useCall();
  return (
    <div>
      <div>Approval</div>
      
      <button
        onClick={approveCall}
        className="bg-slate-700 py-2 px-4 rounded-md hover:bg-slate-500 ease-in-out duration-300"
      >
        Approve Renewal of Membership
      </button>
    </div>
  );
};

export default ApprovalFor;
