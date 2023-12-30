package ie.atu.eventdatabase;

import com.mongodb.MongoException;
import com.mongodb.client.*;
import com.mongodb.client.result.DeleteResult;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EventService {
    private final MongoClient mongoClient;
    private final String databaseName = "books";
    private final String collectionName = "events";

    public EventService() {
        String uri = "mongodb+srv://alekskijewski88:YJTlAnfysBUSsjZw@cluster0.qjqgr8r.mongodb.net/?retryWrites=true&w=majority";
        this.mongoClient = MongoClients.create(uri);
    }
    public Map<String, Object> getEvent() {
        Map<String, Object> response = new HashMap<>();
        List<Document> eventList = new ArrayList<>();

        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            FindIterable<Document> documents = collection.find().limit(20);

            try (MongoCursor<Document> cursor = documents.iterator()) {
                while (cursor.hasNext()) {
                    Document document = cursor.next();
                    eventList.add(document);
                }
            }

            response.put("events", eventList);
        } catch (MongoException e) {
            e.printStackTrace();
            response.put("books", List.of());
            response.put("error", "Failed to fetch books");
        }

        return response;
    }

    public void addEvent(Document event) {
        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            collection.insertOne(event);
        } catch (MongoException e) {
            e.printStackTrace();
        }
    }

    public Document getEventById(String id) {
        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            Document query = new Document("eventID", new ObjectId(id));
            return collection.find(query).first();
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return null;
    }
    public boolean deleteEventById(String eventId) {
        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            Document query = new Document("eventID", eventId);
            DeleteResult result = collection.deleteOne(query);
            System.out.println(result.getDeletedCount()>0);
            return result.getDeletedCount() > 0;
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return false;
    }
}
