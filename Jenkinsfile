pipeline {
    agent {
        docker { image 'node:22.12.0-alpine3.20' }
        args '-v /tmp:/tmp' // Optional: Mount a volume if needed
    }

    stages {
        stage ('checkout') {
            git 'https://github.com/Doseman01/guessing-game.git'

        }
        stage ('run app') {
            sh 'node number-guessing-game.js'
        }
    }
}      

