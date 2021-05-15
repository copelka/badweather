const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env') });
const { app } = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server listening on http://127.0.0.1:${PORT}`));
