const https = require('https');


if (process.argv[2]) {

    https.get(process.argv[2], (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        //   console.log(data);
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          console.log((data));
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
}
