/* Past papers. Add one entry per paper.
   {
     id: "anat3-2025-s1",            // unique, no spaces
     subject: "anat3",               // subject id from index.js
     title: "Anatomy 3 exam",
     year: "2025", session: "Session 1",     // optional
     pdf: "papers/anat3-2025-s1.pdf",        // optional: the paper as a PDF file in the papers folder
     answersPdf: "papers/anat3-2025-s1-answers.pdf",   // optional
     questions: [ { q: "...", options: ["A","B","C","D"], answer: 0, why: "..." } ]   // optional: turns it into a quiz
   }
*/
window.SINA = window.SINA || { subjects: [], lectures: {} };
SINA.papers = [];
