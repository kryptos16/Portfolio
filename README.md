# Portfolio
If you see the error EADDRINUSE: address already in use :::5000, another process is using port 5000.Open PowerShell and run : netstat -ano | findstr :5000 Note the PID (last number).  Kill the process using: taskkill /PID 12345 /F (Replace 12345 with the actual PID.) than npm start 
