pipeline {
    agent {
        docker {
            image 'node:22.12.0-alpine3.20'
            args '-v /tmp:/tmp' // Optional: Mount a volume if needed
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Doseman01/guessing-game.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Only if package.json is present
            }
        }
        stage('Run App') {
            steps {
                sh 'node number-guessing-game.js'
            }
        }
    }
}
      

