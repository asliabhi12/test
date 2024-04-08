const fs = require('fs');

function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('Error: File not found');
    } else {
      console.error('Error reading file:', err.message);
    }
    return;
  }

  try {
    const wordCount = countWords(data);
    console.log('Total number of words:', wordCount);
  } catch (error) {
    console.error('Error counting words:', error.message);
  }
});
