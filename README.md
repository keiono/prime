Cytoscape Prime
=====

A web first approach to network visualization, Prime consists of many react components communicating
via Elsa, our Erlang Submit Agent, with micro services to deliver insights into your data. 

Getting Started
-----

Elsa uses Docker Hub automated builds for production use: [Prime on Docker Hub](https://hub.docker.com/r/cytoscape/prime).

You will need a Docker daemon to deploy the app. Once you have docker installed, run:

``` docker run -p 8080:8080 cytoscape/prime #Runs prime in a container on port 8080 ```

This will bring up the app on port 8080.

Releases and Production Deployments
-----
Releases are built automatically using Docker Hub automated builds. Images follow a master and tag scheme:

```
docker run cytoscape/prime:latest #Run the container built off of master's last commit. Same as cytoscape/prime with no tag.
docker run cytoscape/prime:tag #Where tag is a release tag such as cytoscape/prime:v0.1.0 for the v0.1.0 version of prime.
```

For maximum stabability in production deployments, use a version tag. For the latest features and bug fixs, use the latest tag. You can also build your own release of prime using the primary Dockerfile:

```
docker build -t prime .
```

Development
------
You can develop through either docker or using npm to install the dependancies locally.

####Node Package Manager Development
First, install the latest version of node. Clone the repo, and then use npm to install the dependancies and run
tasks:

```
git clone https://github.com/cytoscape-ci/prime.git && cd prime && npm install

  npm run dev      #Run prime on localhost:8080
  npm run test     #Run all of the jest tests
  npm run coverage #Run jest's coverage tool
  npm run build    #Build the project into the build directory
```

####Docker Container Development

To develop in a container, you should build your changes with the devleopment Dockerfile:

```
docker build -f Dockerfile.develop -t prime .
```

You can then run any npm command by appending it to docker run like so:

```
docker run -it prime dev #Equivelant to npm run dev
```

Contributing
------
Contributions are welcome in the form of issues or pull requests. For code changes, please submit jest tests in the appropriate directory.

Licensing
=========
You can find the LGPL License for prime [here](https://github.com/cytoscape-ci/prime/blob/master/LICENSE.txt).
