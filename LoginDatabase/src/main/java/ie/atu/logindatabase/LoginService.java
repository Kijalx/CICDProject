package ie.atu.logindatabase;

import com.mongodb.MongoException;
import com.mongodb.client.*;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LoginService {
    private final MongoClient mongoClient;
    private final String databaseName = "books";
    private final String collectionName = "login";

    public LoginService() {
        String uri = "mongodb+srv://alekskijewski88:YJTlAnfysBUSsjZw@cluster0.qjqgr8r.mongodb.net/?retryWrites=true&w=majority";
        this.mongoClient = MongoClients.create(uri);
    }

    public Map<String, Object> getLogin() {
        Map<String, Object> response = new HashMap<>();
        List<Document> loginList = new ArrayList<>();

        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            FindIterable<Document> documents = collection.find().limit(20);

            try (MongoCursor<Document> cursor = documents.iterator()) {
                while (cursor.hasNext()) {
                    Document document = cursor.next();
                    loginList.add(document);
                }
            }

            response.put("login", loginList);
        } catch (MongoException e) {
            e.printStackTrace();
            response.put("login", List.of());
            response.put("error", "Failed to fetch Login");
        }

        return response;
    }

    public void addLogin(Document login) {
        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            collection.insertOne(login);
        } catch (MongoException e) {
            e.printStackTrace();
        }
    }

    public Document getLoginById(String id) {
        try {
            System.out.println(id);
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);
            Document query = new Document("loginID", id);

            return collection.find(query).first();
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return null;
    }
}