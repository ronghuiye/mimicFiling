# mimicFiling
navigate into BE folder, run yarn install, then yarn start, back end will listen port 3001
navigate into FE folder, run yarn install, then yarn start, front end will listen port 3000
run nginx locally, example server
server {
         listen       30000;
         location / {
            proxy_pass http://localhost:3000;
         }
         location ^~ /static/ {
             proxy_pass http://localhost:3000;
         }
         location ^~/api/ {
           proxy_pass http://localhost:3001;
         }
     
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
       }

open broswer to hit http://localhost:30000