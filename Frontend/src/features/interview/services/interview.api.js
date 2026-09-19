import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  withCredentials: true,
});

// Generate an interview report from job description, self description and resume
export const generateInterviewReport = async ({
  jobDescription,
  selfDescription,
  resumeFile,
}) => {
  const formData = new FormData();
  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", selfDescription);
  formData.append("resume", resumeFile);

  const response = await api.post("/api/interview/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

// Get one interview report by its id
export const getInterviewReportById = async (interviewId) => {
  const response = await api.get(`/api/interview/report/${interviewId}`);
  return response.data;
};

// Get all interview reports of the logged-in user
export const getAllInterviewReports = async () => {
  const response = await api.get("/api/interview/");
  return response.data;
};

// Generate a resume PDF for a report
export const generateResumePdf = async ({ interviewReportId }) => {
  const response = await api.post(
    `/api/interview/resume/pdf/${interviewReportId}`,
    null,
    { responseType: "blob" },
  );
  return response.data;
};
