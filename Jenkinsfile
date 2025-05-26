pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // nama yang anda letak dalam Jenkins
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Run App') {
            steps {
                echo 'Starting app...'
                bat 'node index.js'
            }
        }
    }
}
