const fs = require('fs');
const path = require('path');
const outDir = path.join(__dirname, '..', 'public', 'resume');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
const filePath = path.join(outDir, 'Naveenkumar_P_Resume.pdf');
const content = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 244 >>
stream
BT
/F1 16 Tf
50 740 Td (NAVEENKUMAR P Resume) Tj
0 -28 Td (Phone: 8825568542) Tj
0 -18 Td (Email: naveenkumar.p2024aids@sece.ac.in) Tj
0 -18 Td (Location: Tamil Nadu, India) Tj
0 -24 Td (Education: Sri Eshwar College of Engineering, B.Tech AI & Data Science) Tj
0 -18 Td (Experience: MERN Stack Developer Intern) Tj
0 -18 Td (Projects: AI Notes-to-Mind Map, Healthcare Platform, Market Intelligence) Tj
0 -18 Td (Skills: Python, Java, C++, SQL, React, Spring Boot, MongoDB) Tj
0 -18 Td (Certifications: C, C++, Data Visualization, Python, Machine Learning) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000063 00000 n 
0000000112 00000 n 
0000000221 00000 n 
0000000298 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
364
%%EOF
`;
fs.writeFileSync(filePath, content, 'binary');
console.log(`Created ${filePath}`);
