pipeline {
    agent any
    tools {
        nodejs 'NodeJS_18'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running Automated Tests...'
                sh 'npm test'  // Fails pipeline if tests fail
            }
        }
        stage('Build Application') {
            steps {
                echo 'Building Application...'
                sh 'npm run build'
            }
        }
        stage('Run Application') {
            steps {
                echo 'Starting Application...'
                sh 'nohup node app.js &'
            }
        }
    }
}
