const fs = require('fs');
const path = require('path');

// Generate a valid, clean PDF 1.4 document for Ghanishtha Kapoor's Resume
function buildResumePdf() {
  const content = [];
  
  // Helpers
  const escapePdfText = (str) => {
    return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  };

  // Page setup: A4 = 595.28 x 841.89 points
  // Margin = 40pt left/right, 40pt top/bottom
  // Available width = 515pt
  let y = 800; // start near top
  const left = 40;
  const right = 555;
  const width = right - left;

  const stream = [];

  const addText = (text, x, yPos, font, size, isBold = false) => {
    const f = isBold ? '/F2' : '/F1';
    stream.push(`BT ${f} ${size} Tf 1 0 0 1 ${x} ${yPos} Tm (${escapePdfText(text)}) Tj ET`);
  };

  const addLine = (x1, y1, x2, y2, strokeColor = '0 0 0', lineWidth = 0.5) => {
    stream.push(`${strokeColor} RG ${lineWidth} w ${x1} ${y1} m ${x2} ${y2} l S`);
  };

  // Header - Centered Name & Contact
  stream.push('0 0 0 rg'); // black
  addText('Ghanishtha Kapoor', 190, y, '/F2', 20, true);
  y -= 18;
  addText('Amritsar, Punjab, India', 230, y, '/F1', 10);
  y -= 14;
  addText('+91 8837827095  |  kapoorghanishtha2005@gmail.com  |  linkedin.com/in/ghanishtha-kapoor', 105, y, '/F1', 9.5);
  y -= 18;

  const addSectionHeading = (title) => {
    y -= 4;
    addText(title, left, y, '/F2', 11.5, true);
    y -= 4;
    addLine(left, y, right, y, '0.2 0.2 0.2', 0.75);
    y -= 12;
  };

  // 1. Professional Summary
  addSectionHeading('Professional Summary');
  const summaryLines = [
    'Results-driven Digital Media Strategist and Content Producer with hands-on experience leading end-to-end content',
    'lifecycles, cross-platform social media strategy, on-location video shooting, and audience growth campaigns. Proven',
    'track record in concept development, editorial calendar management, scriptwriting, and performance analytics to',
    'drive engagement across digital ecosystems. Combines creative storytelling and production management with a',
    'strong technical foundation in web technologies and digital workflows to deliver high-impact media operations.'
  ];
  summaryLines.forEach(line => {
    addText(line, left, y, '/F1', 8.8);
    y -= 11.5;
  });

  // 2. Core Competencies
  y -= 4;
  addSectionHeading('Core Competencies');
  const competencies = [
    ['Media Strategy & Operations: ', 'Content Strategy, Social Media Management, Digital Distribution, Editorial Calendar Planning, Brand Storytelling, Campaign Roadmapping, Workflow Coordination'],
    ['Production & Shooting: ', 'On-Location Video Shooting, Framing & Camera Operation, Lighting & Audio Setup, Concept Ideation, Scriptwriting, Hook Development, Short-Form Content (Reels, Shorts)'],
    ['Data & Performance: ', 'Audience Engagement, Reach & Retention Optimization, Performance Analytics, A/B Testing, Conversion & Growth Tracking'],
    ['Tools & Software: ', 'Canva, CapCut, VN Video Editor, Premiere Pro, Git, Supabase, Next.js, Web Technologies']
  ];
  competencies.forEach(([boldLabel, text]) => {
    addText(boldLabel, left, y, '/F2', 8.5, true);
    const indent = boldLabel.length * 4.6;
    addText(text, left + indent, y, '/F1', 8.5);
    y -= 12;
  });

  // 3. Professional Experience
  y -= 4;
  addSectionHeading('Professional Experience');

  // Job 1: Dawa Bazaar
  addText('Media Strategist & Social Media Manager', left, y, '/F2', 10, true);
  addText('08/2025 \u2013 04/2026', 475, y, '/F1', 9);
  y -= 12;
  addText('Dawa Bazaar', left, y, '/F1', 9.5);
  addText('Amritsar, India', 485, y, '/F1', 9);
  y -= 12;

  const job1Bullets = [
    'Spearheaded comprehensive social media strategy and editorial calendar across key digital platforms, accelerating brand visibility and audience reach.',
    'Directed and shot original short-form video campaigns (Instagram Reels), handling on-site camera direction, lighting, composition, and visual storytelling.',
    'Researched audience trends and drafted compelling scripts, narrative hooks, and SEO-optimized captions to maximize viewer retention and organic discoverability.',
    'Oversaw the full production pipeline from pre-production concept boards through production and final post-production quality checks.',
    'Analyzed weekly reach, view-through rates, and interaction metrics to refine creative briefs, optimize posting schedules, and continuously scale engagement.',
    'Collaborated cross-functionally with team stakeholders to ensure brand compliance, messaging consistency, and timely campaign deliveries.'
  ];
  job1Bullets.forEach(b => {
    addText('\u2022', left + 6, y, '/F1', 8.5);
    addText(b, left + 16, y, '/F1', 8.5);
    y -= 11.5;
  });

  y -= 4;
  // Job 2: Blackcoffer
  addText('Associate Software Developer', left, y, '/F2', 10, true);
  addText('09/2025 \u2013 03/2026', 475, y, '/F1', 9);
  y -= 12;
  addText('Blackcoffer', left, y, '/F1', 9.5);
  addText('Remote', 515, y, '/F1', 9);
  y -= 12;

  const job2Bullets = [
    'Engineered and maintained responsive web applications using Next.js, React, and modern web architectures, strengthening data-driven digital operations.',
    'Integrated backend services and managed database interactions utilizing Supabase and RESTful APIs to enhance platform performance.',
    'Partnered with multidisciplinary teams to translate functional specifications into robust technical solutions, developing structured project management and communication capabilities.'
  ];
  job2Bullets.forEach(b => {
    addText('\u2022', left + 6, y, '/F1', 8.5);
    addText(b, left + 16, y, '/F1', 8.5);
    y -= 11.5;
  });

  // 4. Education
  y -= 4;
  addSectionHeading('Education');
  addText('Master of Business Administration (MBA)', left, y, '/F2', 9.5, true);
  addText('2026 \u2013 Present', 475, y, '/F1', 9);
  y -= 11.5;
  addText('Lovely Professional University', left, y, '/F1', 9);
  addText('Online', 525, y, '/F1', 9);
  y -= 13;

  addText('Bachelor of Computer Applications (BCA)', left, y, '/F2', 9.5, true);
  addText('2022 \u2013 2025', 475, y, '/F1', 9);
  y -= 11.5;
  addText('Amritsar Group of Colleges', left, y, '/F1', 9);
  addText('Amritsar, India', 485, y, '/F1', 9);
  y -= 11.5;
  addText('Cumulative Grade Point Average (CGPA): 7.58', left, y, '/F1', 8.5);
  y -= 15;

  // 5. Featured Work
  addSectionHeading('Featured Work');
  addText('Digital Media Portfolio: View Campaigns, Video Shoots & Strategy Samples', left, y, '/F2', 9.5, true);
  y -= 12;
  addText('\u2022', left + 6, y, '/F1', 8.5);
  addText('Features short-form video projects, scripting drafts, shoot breakdowns, and content strategy playbooks.', left + 16, y, '/F1', 8.5);

  const streamContent = stream.join('\n');
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  // Build complete PDF structure
  const objects = [];
  objects.push(`1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj`);
  objects.push(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj`);
  objects.push(`3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj`);
  objects.push(`4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj`);
  objects.push(`5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj`);
  objects.push(`6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj`);

  let offset = 0;
  const header = `%PDF-1.4\n%\xE2\xE3\xCF\xD3\n`;
  offset += Buffer.byteLength(header, 'utf-8');

  const xref = [];
  xref.push('0000000000 65535 f ');

  let body = '';
  for (let i = 0; i < objects.length; i++) {
    const objStr = objects[i] + '\n';
    xref.push(String(offset).padStart(10, '0') + ' 00000 n ');
    body += objStr;
    offset += Buffer.byteLength(objStr, 'utf-8');
  }

  const xrefStart = offset;
  let trailer = `xref\n0 ${objects.length + 1}\n${xref.join('\n')}\n`;
  trailer += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  trailer += `startxref\n${xrefStart}\n%%EOF\n`;

  const finalPdf = header + body + trailer;
  const outputPath = path.resolve('public/resume.pdf');
  fs.writeFileSync(outputPath, finalPdf, 'binary');
  console.log('Successfully written resume PDF to', outputPath, 'size:', finalPdf.length);
}

buildResumePdf();
