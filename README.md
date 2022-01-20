# Spacestagram-Challenge

Spacestagram is a Django application that fetches data from NASA's APOD API to display the image and corresponding data to the image. The web application also enables users to toggle a like button.

You can also test the application on [Heroku](https://anthony-spacestagram-challenge.herokuapp.com/).

Spacestagram link: https://anthony-spacestagram-challenge.herokuapp.com/

## Decisions
For a simple web application, I decided on using the Django framework to host React as its own frontend app. This was made possible using webpack and babel. I created the web application this way to leave room for the possibility of iterating on the project which could involve adding endpoints or building out the backend.

## Challenges

Even though my application was successfully built in Heroku, my app never successfully deployed. In the post-build log, Heroku threw an error code, H14, which indicated that there was no web dynos running. After closer inspection of my build log, Procfile did not dictate what web dynos to use for deployment. I compared multiple tutorials with the placement, naming, and command of my Procfile, but I couldn't determine the cause. However, I noticed that most people had a .git file in the root of the project source. For my project, I had a .git file in the root of my virtual environment. Thus, I tried moving the .git file and that solved my deployment issue. 