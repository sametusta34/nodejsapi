import { startServer } from './server.mjs'; 
import envload from './configs/env.loading.mjs';

const app = startServer();
const PORT =  process.env.API_PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});