pipeline {
  agent any
  stages {
      stage('Build') {
          steps {
              sh 'echo "Hello World"'
              sh '''
                  echo "Multiline shell steps works too"
                  ls -lah
              '''
          }
      }      
      stage('Upload to AWS') {
          steps {
              withAWS(region:'sa-east-1',credentials:'AWS-S3-Cred') {
              sh 'echo "Uploading content with AWS creds"'
                  s3Upload(pathStyleAccessEnabled: true, payloadSigningEnabled: true, file:'build', bucket:'my-exp-dan')
              }
          }
      }
  }
}