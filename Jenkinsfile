pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'
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

        stage('Fix Jest Permissions') {
            steps {
                sh 'chmod +x ./node_modules/.bin/jest'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx jest --ci --reporters=default --reporters=jest-junit'
            }
        }

        stage('Publish Test Results') {
            steps {
                junit '**/junit.xml'
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
        }
    }
}
