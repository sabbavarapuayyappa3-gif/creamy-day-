const https = require('https');
const fs = require('fs');

https.get('https://test.godavariwave.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('test_godavariwave.html', data);
    console.log('Saved test_godavariwave.html, length:', data.length);
    // Find all images or logos
    const urls = data.match(/https?:\/\/[^\s"'<>]+\.(png|jpg|jpeg|svg|webp|gif)/gi) || [];
    console.log('Image URLs found:', urls);
  });
});
