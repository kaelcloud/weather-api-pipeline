pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Clone Code') {
            steps {
                echo 'Cloning repository...'
                // Repo dah di-clone automatik, jadi tak perlu buat apa2
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Run App') {
            steps {
                echo 'Starting app...'
                bat 'node index.js &'
            }
        }
    }
}
