FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/Micro1-0.0.1-SNAPSHOT.jar /app

EXPOSE 8080

CMD ["java","-jar","Micro1-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=default"]