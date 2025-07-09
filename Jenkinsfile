pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'  // Define in Jenkins → Global Tools → NodeJS
    }

    stages {
        stage('Checkout Code') {
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
                  sh 'npx jest --ci --reporters=default --reporters=jest-junit'
            }
        }

        stage('Publish Test Results') {
            steps {
                junit '**/test-results.xml'  // If using Jest JUnit reporter
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
