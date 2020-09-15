## Microservices in Node.js

It is a boilerplate for microservices and load balance in node.js 

In this example, HAProxy is used for load balance. 

It has 4 instances of echoing process at node.js. 

###  build an image: echo 

- docker build -t echo  .

- see specification at Dockerfile

### using load balancing: HAProxy 

- HAProxy : https://www.haproxy.com/ 

- balance roundrobin

### configure HAProxy and multiple instances of microservices, echo 

- see docker-compose.yml 

- set APPID at docker-compose.yml

    image: echo

    environment:

        - APPID=10002

### listening port of echo:

- set port to be equal to APPID 

    const appid = process.env.APPID;

    app.listen(appid, ()=>console.log(`${appid} is listening on ${appid}`))


### how to display load balance:

- npm install 

- docker-compose up

- open a browser 

- localhost:8000, or localhost/app1, or localhost:8000/app2 

you should see echo from pid 10001, 10002, 10003, and 10004 everytime you reload the page 
