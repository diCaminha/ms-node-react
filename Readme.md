# Useful commands

## command to build the images on your machine
`cd microservices/posts`
`docker build -t YOUR_NAME/posts:0.0.1`

## command to create the pod for posts on k8s
`cd infra/k8s`
`kubectl apply -f posts.yaml`

## command to run the pod posts
`kbctl exec -it posts sh`

## command to get all logs of a pod
`kbctl logs pod posts`

## command list pods
`kbctl get pods`

## steps to propagate new changes in a project
1. new code done and commited
2. `docker build -t dcaminha/posts .`
3. push the code to docker hub: `docker push dcaminha/posts`
4. verify if the deployment is set in your env: `kubectl get deployments`
5. `kubectl rollout restart deployment posts-depl`
