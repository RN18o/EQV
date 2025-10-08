# Incident Management System

A full-stack web application to report, track, and manage incidents efficiently.  
This system allows users to create, update, and view their own incidents, while ensuring that users can’t modify others’ reports.  

---

## 📁 Project Structure

project/
│
├── backend/
│ ├── app.js
│ ├── server.js
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── userController.js
│ │ └── incidentController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ ├── User.js
│ │ └── Incident.js
│ ├── routes/
│ │ ├── userRoutes.js
│ │ └── incidentRoutes.js
│ ├── services/
│ │ └── incidentService.js
│ │ └── userServices.js
│ ├── utils/
│ │ └── sendEmail.
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page-level React components (Login, Dashboard, etc.)
│ │ ├── context/ # Auth / global state context
│ │ ├── assets/ # Images or static files
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js


# Setup and launch process
**1). Clone the Repository**<br/>
       Open your terminal and run the following command to clone the repository:<br/>
      
       ```
       git clone https://github.com/RN18o/IMS.git
       
       ``` 

       
**2). Navigate to the Project Directory**<br/>
       Change into the project frontend directory:</br>
       
       ```
       cd Frontend
       
       ```
       
       Change into the project Backend directory:</br>
       
       ```
       cd Backend
       
       ```

       
**3). Install Dependencies **<br/>
       Install the necessary packages using npm in both Frontend and Backend:<br/>
       
       ```
       npm install all
       or
       yarn install
       
       ```

       
**4). Start the Development Server**<br/>
       After installing the dependencies, you can start the development server with:<br/>
       For Frontend and Backend --> 
      
      ```
      
       npm run dev
       or 
       yarn run dev
      
       ```

       
**5). Access the Application**<br/>
      Open your web browser and navigate to:<br/> 
     ```
      http://localhost:5173/login
      ``` <br/>
      You should see the Incident management System application running on  your local. 

