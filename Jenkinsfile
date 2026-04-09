pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t backend:v1 ./be/backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t frontend:v1 ./fe/project'
            }
        }

        stage('List Images') {
            steps {
                sh 'docker images'
            }
        }
    }
}