const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

let failures = 0;
function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failures++;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

async function runTests() {
  console.log('====================================================');
  console.log('   MUTHU KARTHIK PORTFOLIO - END-TO-END TEST SUITE   ');
  console.log('====================================================\n');

  // STEP 1: Verify Build Artifacts
  console.log('--- TEST GROUP 1: Static Artifacts & Data Integrity ---');
  const distDir = path.join(__dirname, '..', 'dist');
  assert(fs.existsSync(distDir), 'dist/ output directory exists');
  assert(fs.existsSync(path.join(distDir, 'index.html')), 'dist/index.html exists');

  const requiredSvgs = [
    'lifenet-health.svg',
    'caldea-spa.svg',
    'pomelo-fashion.svg',
    'allograft-academy.svg',
    'signature-car-hire.svg',
    'partners-portal.svg',
    'blc-portal.svg',
    'cardiac-vascular.svg'
  ];

  requiredSvgs.forEach((svg) => {
    const pPublic = path.join(__dirname, '..', 'public', 'images', 'projects', svg);
    const pDist = path.join(distDir, 'images', 'projects', svg);
    assert(fs.existsSync(pPublic), `public/images/projects/${svg} exists`);
    assert(fs.existsSync(pDist), `dist/images/projects/${svg} exists`);
    
    // Check SVG content validity
    const content = fs.readFileSync(pDist, 'utf8');
    assert(content.includes('<svg') && content.includes('</svg>'), `${svg} is a valid SVG document`);
    assert(content.length > 500, `${svg} has non-trivial visual content (${content.length} bytes)`);
  });

  // Verify CV Documents
  const cvPdf = path.join(distDir, 'docs', 'MuthuKarthik-CV.pdf');
  const cvDocx = path.join(distDir, 'docs', 'MuthuKarthik-CV.docx');
  assert(fs.existsSync(cvPdf), 'dist/docs/MuthuKarthik-CV.pdf exists');
  assert(fs.existsSync(cvDocx), 'dist/docs/MuthuKarthik-CV.docx exists');

  // STEP 2: Start Preview Server and Probe Endpoints
  console.log('\n--- TEST GROUP 2: Local HTTP Server & Routing E2E ---');
  const PORT = 4199;
  
  // Custom lightweight static server for deterministic testing
  const server = http.createServer((req, res) => {
    let reqPath = decodeURI(req.url.split('?')[0]);
    if (reqPath === '/') reqPath = '/index.html';
    const filePath = path.join(distDir, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.pdf': 'application/pdf',
        '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      };
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA Fallback
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(path.join(distDir, 'index.html')).pipe(res);
    }
  });

  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`Local test server running on http://127.0.0.1:${PORT}`);

  function fetchUrl(urlPath) {
    return new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${PORT}${urlPath}`, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
      }).on('error', reject);
    });
  }

  // Probe index.html
  const rootRes = await fetchUrl('/');
  assert(rootRes.status === 200, 'GET / returns HTTP 200 OK');
  assert(rootRes.body.includes('Muthu Karthik'), 'Root HTML includes "Muthu Karthik"');
  assert(rootRes.body.includes('root'), 'Root HTML contains root mount point');

  // Probe all project SVG previews over HTTP
  for (const svg of requiredSvgs) {
    const res = await fetchUrl(`/images/projects/${svg}`);
    assert(res.status === 200, `GET /images/projects/${svg} returns HTTP 200`);
    assert(res.headers['content-type'] === 'image/svg+xml', `${svg} served with image/svg+xml`);
  }

  // Probe CV downloads over HTTP
  const pdfRes = await fetchUrl('/docs/MuthuKarthik-CV.pdf');
  assert(pdfRes.status === 200, 'GET /docs/MuthuKarthik-CV.pdf returns HTTP 200');

  const docxRes = await fetchUrl('/docs/MuthuKarthik-CV.docx');
  assert(docxRes.status === 200, 'GET /docs/MuthuKarthik-CV.docx returns HTTP 200');

  // Check JavaScript & CSS bundles
  const jsMatch = rootRes.body.match(/src="([^"]+\.js)"/);
  const cssMatch = rootRes.body.match(/href="([^"]+\.css)"/);

  if (jsMatch && jsMatch[1]) {
    const jsRes = await fetchUrl(jsMatch[1]);
    assert(jsRes.status === 200, `GET ${jsMatch[1]} (JS Bundle) returns HTTP 200`);
    assert(jsRes.body.includes('lifenet-health'), 'JS bundle contains "lifenet-health" project id');
    assert(jsRes.body.includes('caldea-spa'), 'JS bundle contains "caldea-spa" project id');
    assert(jsRes.body.includes('pomelo-fashion'), 'JS bundle contains "pomelo-fashion" project id');
    assert(jsRes.body.includes('allograft-academy'), 'JS bundle contains "allograft-academy" project id');
    assert(jsRes.body.includes('signature-car-hire'), 'JS bundle contains "signature-car-hire" project id');
    assert(jsRes.body.includes('partners-portal'), 'JS bundle contains "partners-portal" project id');
    assert(jsRes.body.includes('blc-portal'), 'JS bundle contains "blc-portal" project id');
    assert(jsRes.body.includes('cardiac-vascular'), 'JS bundle contains "cardiac-vascular" project id');
  }

  if (cssMatch && cssMatch[1]) {
    const cssRes = await fetchUrl(cssMatch[1]);
    assert(cssRes.status === 200, `GET ${cssMatch[1]} (CSS Bundle) returns HTTP 200`);
    assert(cssRes.body.length > 1000, `CSS bundle is non-empty (${cssRes.body.length} bytes)`);
  }

  server.close();
  console.log('\n====================================================');
  if (failures === 0) {
    console.log('🎉 ALL END-TO-END TESTS PASSED SUCCESSFULLY! (0 failures)');
  } else {
    console.error(`💥 ${failures} TESTS FAILED!`);
    process.exit(1);
  }
  console.log('====================================================');
}

runTests().catch((err) => {
  console.error('Test execution error:', err);
  process.exit(1);
});
