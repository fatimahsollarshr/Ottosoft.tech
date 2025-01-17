README.md
OttoSoft.tech Nvidia solution. This project demonstrates a Smart Vision for Home Surveillance solution using NVIDIA technologies. The solution includes a React frontend, a Spring Boot (Java) backend, and a Python script for image processing.
Table of Contents
Prerequisites
Installation Guide
Folder Structure
Usage Instructions
Notes

Prerequisites
Before starting, ensure the following software and tools are installed:
Node.js and npm (for React frontend)
Java 17+ (for Spring Boot backend)
Python 3.8+ (for processing script)
Maven (for managing backend dependencies)
Git (to clone the repository)
IDE/Text Editor (e.g., VSCode, IntelliJ IDEA)
2.  Installation Guide
Step 1: Clone the Repository
git clone <repository_url>
cd <repository_folder>
Step 2: Frontend Setup (React)
Navigate to the frontend folder:
cd frontend
Install dependencies:
npm install
Start the React development server:
npm start
The frontend will run on http://localhost:3000.

Step 3: Backend Setup (Spring Boot - Java)
Navigate to the backend folder:
cd backend
Ensure the ImageProcessorController.java file is present in the src/main/java directory.
Install dependencies and build the project using Maven:
mvn clean install
Run the Spring Boot application:
mvn spring-boot:run
The backend will run on http://localhost:8080.

Step 4: Python Processing Script
Navigate to the processing folder:
cd processing
Create a virtual environment (optional but recommended):
python3 -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows
Install dependencies:
pip install opencv-python
Ensure the process_image.py file is present.

3. Folder Structure
The project follows a structured layout:
<project_root>
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   └── package.json
│
├── backend/                 # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   ├── ImageProcessorController.java
│   │   │   │   └── ...
│   │   ├── resources/
│   │   │   ├── application.properties
│   │   │   └── ...
│   └── pom.xml
│
├── processing/              # Python script for processing
│   ├── process_image.py
│   └── ...
│
└── README.md

4. Usage Instructions
Start the backend server:
cd backend
mvn spring-boot:run
Start the React frontend:
cd frontend
npm start
Ensure the Python script is accessible by the backend and properly configured.
Open the React frontend at http://localhost:3000.
Upload an image, and the system will process it using the Python script, returning the result.

5. Notes
Dependencies: Make sure all dependencies for Node.js, Maven, and Python are installed as described.
Backend Communication: The backend communicates with the Python script using a system call. Update paths if needed.
Ports: Ensure ports 3000 (frontend) and 8080 (backend) are free.
Error Handling: If errors occur, check backend logs and ensure the Python environment is properly set up.

Troubleshooting
React Build Issues: Delete node_modules and reinstall:
rm -rf node_modules
npm install
Backend Fails to Start: Check Java and Maven versions.
Python Errors: Ensure OpenCV is installed and compatible with your Python version.
