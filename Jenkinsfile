pipeline {
  agent any
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            sh 'npm run test'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }
    stage('Production') {
        steps {
          withAWS(region:'sa-east-1',credentials:'My-exp-job-id') {
            s3Delete(bucket: 'my-exp-dan', path:'**/*')
            s3Upload(bucket: 'my-exp-dan', workingDir:'build', includePathPattern:'**/*');
          }
        }
    }
  }
}
