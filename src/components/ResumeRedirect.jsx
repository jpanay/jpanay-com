import { useEffect } from "react";

const ResumeRedirect = () => {
  const resumeLink =
    "https://drive.google.com/file/d/15Mxxr3pyzAbCznCVwuCOk_IM6G4Hocq7/view?usp=sharing";

  useEffect(() => (window.location.href = resumeLink), []);

  return null;
};

export default ResumeRedirect;
