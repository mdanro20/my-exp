pipeline {
    agent any
    stages {
        stage('deploy') {
            steps {
              bat "aws configure set region $AWS_DEFAULT_REGION" 
              bat "aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID"  
              bat "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY"
              bat "aws s3 sync public/ s3://my-exp-dan"
            }
        }
    }
}