# mycontact
visit https://3.15.23.181:3000/ to view app or either way use ssh into the AWS EC2 ubuntu instance to host it on localhost, the .pem file is available in this repo

A contacts app built with node js ,express and mongodb where users can maintain their contacts

Please find attached the pem file and ssh into the AWS EC2 instance
 
 <p>Run this command, if necessary :</p>

<pre><code>chmod 400 ubec2-amazon-ubuntu.pem.
</code></pre>

 
 <p>ssh into instance:</p>

<pre><code>ssh -i "ubec2-amazon-ubuntu.pem" ubuntu@ec2-3-15-23-181.us-east-2.compute.amazonaws.com
</code></pre>
![Alt text](https://github.com/niiwade/mycontact/blob/master/1.png)
 
 <p>Go into the directory name</p>

<pre><code>cd mycontact
</code></pre>
![Alt text](https://github.com/niiwade/mycontact/blob/master/2.png)

  
   <p>run script</p>

<pre><code> npm start app.js
</code></pre>

![Alt text](https://github.com/niiwade/mycontact/blob/master/3.png)


   <p>App runs on http://localhost:3000/</p>

![Alt text](https://github.com/niiwade/mycontact/blob/master/4.png)


ENJOY
