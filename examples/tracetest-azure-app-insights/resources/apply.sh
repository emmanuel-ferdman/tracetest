#!/bin/sh

set -e

TOKEN=$TRACETEST_TOKEN
ENVIRONMENT_ID=$TRACETEST_ENVIRONMENT_ID
ARM_ID=$APP_INSIGHTS_ARM_ID
ACCESS_TOKEN=$APP_INSIGHTS_ACCESS_TOKEN

apply() {
  echo "Configuring TraceTest"
  tracetest configure --token $TOKEN --environment $ENVIRONMENT_ID

  echo "
type: DataStore
spec:
  name: azureappinsights
  type: azureappinsights
  azureappinsights:
    connectionType: direct
    resourceArmId: ${ARM_ID}
    accessToken: ${ACCESS_TOKEN}
    useAzureActiveDirectoryAuth: false
" > /resources/datastore.yaml

  echo "Applying Resources"
  tracetest apply datastore -f /resources/datastore.yaml
  tracetest apply pollingprofile -f /resources/pollingprofile.yaml
  tracetest apply test -f /resources/test.yaml
}

apply