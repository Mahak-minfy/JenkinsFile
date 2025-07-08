pipeline {
    agent any
    tools {
        nodejs 'NodeJS_18'
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from this repository...'
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }
        stage('Run Tests') {
    steps {
        echo 'Running Automated Tests...'
        sh 'npx jest'   // ✅ This will work even without a global install
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
