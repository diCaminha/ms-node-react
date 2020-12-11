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