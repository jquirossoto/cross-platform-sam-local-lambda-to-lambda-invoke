# cross-platform-sam-local-lambda2lambda-invoke

Simple project that shows how to implement cross-platform (Windows, Linux, Mac) AWS SAM local lambda to lambda invocations.

To run the application in Windows or Mac, execute `npm run start`.

To run the appication in Linux, execute `npm run start:linux`.

Once the application is running, you can invoke the Source lambda by executing `npm run invoke`. The Source lambda will in turn invoke the Target lambda.
