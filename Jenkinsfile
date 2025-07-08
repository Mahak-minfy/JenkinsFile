pipeline {
    agent any
    
    environment {
        APP_NAME = "my-node-app"
        DEPLOY_PORT = 3000
        DOCKER_IMAGE = "my-node-app:${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
                echo "Checked out code from ${env.GIT_URL}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                echo "Dependencies installed"
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build --if-present'  // Runs if you have a build script
                echo "Application built successfully"
            }
        }

        stage('Deploy (Local Run)') {
            steps {
                script {
                    // Stop any existing running instance
                    sh 'pkill -f "node app.js" || true'
                    
                    // Start the application in background
                    sh 'nohup node app.js > app.log 2>&1 &'
                    sleep(time: 5, unit: 'SECONDS')  // Wait for app to start
                    
                    // Verify deployment
                    def response = sh(script: "curl -s http://localhost:${DEPLOY_PORT}", returnStdout: true)
                    if (response.contains('Automated Deployment Works')) {
                        echo "Deployment verified successfully"
                    } else {
                        error("Deployment verification failed")
                    }
                }
            }
        }

        stage('Dockerize (Optional)') {
            when {
                expression { env.DOCKER_BUILD == 'true' }
            }
            steps {
                script {
                    writeFile file: 'Dockerfile', text: """
                        FROM node:18-alpine
                        WORKDIR /app
                        COPY package*.json ./
                        RUN npm install
                        COPY . .
                        CMD ["node", "app.js"]
                    """
                    
                    sh "docker build -t ${DOCKER_IMAGE} ."
                    sh "docker run -d -p ${DEPLOY_PORT}:${DEPLOY_PORT} ${DOCKER_IMAGE}"
                    echo "Docker container deployed"
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up..."
            sh 'pkill -f "node app.js" || true'  // Cleanup background process
            archiveArtifacts artifacts: 'app.log', allowEmptyArchive: true
        }
        success {
            emailext (
                subject: "SUCCESS: ${APP_NAME} deployed (Build #${env.BUILD_NUMBER})",
                body: "Node.js application deployed successfully.\n\nBuild URL: ${env.BUILD_URL}",
                to: 'dev-team@example.com'
            )
        }
        failure {
            emailext (
                subject: "FAILED: ${APP_NAME} deployment (Build #${env.BUILD_NUMBER})",
                body: "Deployment failed. Check logs: ${env.BUILD_URL}",
                to: 'dev-team@example.com'
            )
        }
    }
}