exports.handler = async function(event, context) {
    try {
      const path = require('path');
      const fs = require('fs');
  
      // Path to the file
      const filePath = path.join(__dirname, '../.nomedia');
  
      // Read the file
      const fileData = fs.readFileSync(filePath);
  
      // Encode file data to base64
      const base64Data = fileData.toString('base64');
  
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/octet-stream',
          'Content-Disposition': 'attachment; filename=".nomedia"'
        },
        body: base64Data,
        isBase64Encoded: true
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      };
    }
  };
  