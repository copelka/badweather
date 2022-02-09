const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const { app } = require('./app');
const distPath = path.resolve(__dirname, '..', 'client', 'dist');

const PORT = process.env.PORT || 8080;

app.get('/*', function(req, res) {
  res.sendFile(path.resolve(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(PORT, () => console.info(`Server listening on http://127.0.0.1:${PORT}`));
