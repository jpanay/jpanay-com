import { useEffect } from "react";

const ResumeRedirect = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1kQLMYWCKYg213uUAHePuuZr0QydKvMvz/view?usp=sharing";

  useEffect(() => (window.location.href = resumeLink), []);

  return null;
};

export default ResumeRedirect;
