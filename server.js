const express = require('express');
const app =express();

const port = 3000;

app.use('/src',express.static('src'));
app.use('/public',express.static('public'));
app.use('/shaders',express.static('shaders'));

app.get('/', (req, res)=>{
  res.send('<h1>Hello there</h1>');
});

app.get('/translate', (req, res)=>{
    res.sendFile(`${__dirname}/public/translate.htm`);
  });
  app.get('/rotate', (req, res)=>{
    res.sendFile(`${__dirname}/public/rotate.htm`);
  });
  app.get('/scale', (req, res)=>{
    res.sendFile(`${__dirname}/public/scale.htm`);
  });
  app.get('/Trifuerza', (req, res)=>{
    res.sendFile(`${__dirname}/public/Trifuerza.htm`);
  });
  app.get('/Trifuerza-shader', (req, res)=>{
    res.sendFile(`${__dirname}/public/Trifuerza-shader.htm`);
  });    
  app.get('/matrices', (req, res)=>{
    res.sendFile(`${__dirname}/public/projectionModelViewMatrix.htm`);
  });   
  app.get('/externalFile', (req, res)=>{
    res.sendFile(`${__dirname}/public/externalFile.htm`);
  }); 
  app.get('/sprite', (req, res)=>{
    res.sendFile(`${__dirname}/public/SpriteSheetApp.htm`);
  }); 


app.listen(port, console.log(`listening at http://localhost:${port}`));