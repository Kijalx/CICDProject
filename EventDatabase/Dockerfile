FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/EventDatabase-0.0.1-SNAPSHOT.jar /app

EXPOSE 8081

CMD ["java","-jar","EventDatabase-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=default"]