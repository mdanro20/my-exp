pipeline {
  agent any
    environment {
      CI = 'true'
      HOME = '.'
      npm_config_cache = 'npm-cache'
    }
  stages {
    stage('Install Packages') {
      steps {
        bat 'npm install'
      }
    }
    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }
    stage('Deployment') {
      when {
        branch 'master'
      }
      steps {
          withAWS(region:'sa-east-1',credentials:'AWS-S3-Cred') {
          s3Delete(bucket: 'my-exp-dan', path:'**/*')
          s3Upload(bucket: 'my-exp-dan', workingDir:'build', includePathPattern:'**/*');
        }
      }
    }
 }
}