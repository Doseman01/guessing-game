pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Doseman01/guessing-game.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Only if package.json is present
            }
        }
        stage('Run App') {
            steps {
                sh 'node guessingGame.js'
            }
        }
    }
}
      

