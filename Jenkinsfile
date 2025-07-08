pipeline {
    agent any

    tools {
        nodejs "NodeJS_18" // Use the Node.js tool configured in Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/ymahak/Utube', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Post Build') {
            steps {
                echo 'Build completed successfully.'
            }
        }
    }

    post {
        success {
            echo '✔ Build succeeded!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
