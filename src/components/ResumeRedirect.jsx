import { useEffect } from "react";

const ResumeRedirect = () => {
  const resumeLink =
    "https://drive.google.com/file/d/11UQHZwzicK_Lhmk524E4gbI2zCKpH2zB/view?usp=sharing";

  useEffect(() => (window.location.href = resumeLink), []);

  return null;
};

export default ResumeRedirect;
