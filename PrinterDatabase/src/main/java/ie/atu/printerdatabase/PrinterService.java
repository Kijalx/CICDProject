package ie.atu.printerdatabase;

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
public class PrinterService {
    private final MongoClient mongoClient;
    private final String databaseName = "books";
    private final String collectionName = "printer";

    public PrinterService() {
        String uri = "mongodb+srv://alekskijewski88:YJTlAnfysBUSsjZw@cluster0.qjqgr8r.mongodb.net/?retryWrites=true&w=majority";
        this.mongoClient = MongoClients.create(uri);
    }

    public Map<String, Object> getPrinter() {
        Map<String, Object> response = new HashMap<>();
        List<Document> printerList = new ArrayList<>();

        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            FindIterable<Document> documents = collection.find().limit(20);

            try (MongoCursor<Document> cursor = documents.iterator()) {
                while (cursor.hasNext()) {
                    Document document = cursor.next();
                    printerList.add(document);
                }
            }

            response.put("printers", printerList);
        } catch (MongoException e) {
            e.printStackTrace();
            response.put("printers", List.of());
            response.put("error", "Failed to fetch Printers");
        }

        return response;
    }

    public Document getPrinterById(String id) {
        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            Document query = new Document("printerID", new ObjectId(id));
            return collection.find(query).first();
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return null;
    }
}
