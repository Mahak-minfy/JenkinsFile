pipeline {
    agent any
<<<<<<< HEAD
    tools {
        nodejs 'NodeJS_18'
    }
=======
    environment {
        APP_NAME = "my-node-app"
        DEPLOY_PORT = 3000
    }
    tools {
        nodejs 'NodeJS_18'  // Configure this in Jenkins: Manage Jenkins → Global Tool Configuration → NodeJS
    }
>>>>>>> 7ce0444dabbcb08cfb5b0a3a6492984b3e6fd06b
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
<<<<<<< HEAD
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
=======
        stage('Build Application') {
            steps {
                echo 'Running build script (if present)...'
                sh 'npm run build || echo " No build script found, skipping build."'
            }
        }
        stage('Run Application Locally') {
            steps {
                echo 'Starting the Node.js app locally...'
                script {
                    // Stop any previous running instance
                    sh 'pkill -f "node app.js" || true'
                    // Run the app in the background
                    sh 'nohup node app.js > app.log 2>&1 &'
                    // Give the app a few seconds to start
                    sleep(time: 5, unit: 'SECONDS')
                    echo 'Application started locally.'
                }
            }
        }
    }
    post {
        always {
            echo 'Cleaning up Node.js process...'
            sh 'pkill -f "node app.js" || true'  // Kill any running node app
            archiveArtifacts artifacts: 'app.log', allowEmptyArchive: true
        }
        success {
            echo 'Build and local deployment succeeded!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
    }
>>>>>>> 7ce0444dabbcb08cfb5b0a3a6492984b3e6fd06b
}
