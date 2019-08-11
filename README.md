# HOTPLATE
Boilerplate for static site builds with the following features:
* Terraform => infrastructure changes
* AWS => hosting
* Next.js => frontend
* CircleCI => CI/CD

## Getting Started
This assumes you are running a Mac with the AWS cli,  NVM, and Terraform already installed and configured.
You will also need to integrate your Hotplate with your CircleCI account and your CircleCI account with your
AWS account. You'll want to create an IAM policy specific to the project or CircleCI.
```
# update ./scripts/config
vim ./scripts/config

# provision the resources for an environment
bash ./scripts/provision-resources dev

# install the project dependencies
nvm use && npm i

# run the dev server
npm run dev

# export a static site to the ./out dir
npm run export

# serve the files from the ./out dir
npx serve out
```
## Architecture Overview
This project generates static html files and pushes them to S3 with CircleCI. 
Hotplate has two environments, dev and prod. Both environments host project files
in an S3 bucket. Prod configures a CloudFront distribution to cache files and provide
support for HTTPS.

## CI/CD
* Merges to the develop branch deploy to the $DEV_BUCKET.
* Merges to the master branch deploy to the $PROD_BUCKET.
