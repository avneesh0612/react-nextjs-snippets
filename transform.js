const fs = require('fs');

fs.readdirSync(__dirname + '/code').forEach(file => {
  let codeBody = [];
  fs.readFileSync(__dirname + '/code/' + file, 'utf8')
    .split('\n')
    .forEach(line => {
      codeBody.push(line);
    });
  console.log(codeBody);
  fs.writeFileSync(
    __dirname + '/transformedCode/' + file,
    JSON.stringify(codeBody)
  );
});
