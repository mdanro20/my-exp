pipeline {
  agent any
  stages {
      stage('Build') {
          steps {
              bat 'echo "Hello World"'
              bat '''
                  echo "Multiline shell steps works too"
                  ls -lah
              '''
          }
      }      
      stage('Upload to AWS') {
          steps {
              withAWS(region:'sa-east-1',credentials:'AWS-S3-Cred') {
              bat 'echo "Uploading content with AWS creds"'
                  s3Upload(pathStyleAccessEnabled: true, payloadSigningEnabled: true, file:'public', bucket:'my-exp-dan')
              }
          }
      }
  }
}