FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/PrinterDatabase-0.0.1-SNAPSHOT.jar /app

EXPOSE 8080

CMD ["java","-jar","PrinterDatabase-0.0.1-SNAPSHOT.jar", "--spring.profiles.active=docker"]
