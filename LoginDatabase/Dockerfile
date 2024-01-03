FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/LoginDatabase-0.0.1-SNAPSHOT.jar /app

EXPOSE 8080

CMD ["java","-jar","LoginDatabase-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=docker"]
