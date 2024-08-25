import { useEffect } from "react";

const ResumeRedirect = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1XwkIrQL8C3ZR2HN9yCA2RgUT-sXUuDpo/view?usp=sharing";

  useEffect(() => (window.location.href = resumeLink), []);

  return null;
};

export default ResumeRedirect;
