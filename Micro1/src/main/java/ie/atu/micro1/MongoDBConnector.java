package ie.atu.micro1;

import com.mongodb.MongoClientSettings;
import com.mongodb.MongoException;
import com.mongodb.client.*;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MongoDBConnector {
    private final MongoClient mongoClient;
    String uri = "mongodb+srv://alekskijewski88:YJTlAnfysBUSsjZw@cluster0.qjqgr8r.mongodb.net/?retryWrites=true&w=majority";
    String databaseName = "books";
    String collectionName = "books";

    public MongoDBConnector() {
        this.mongoClient = MongoClients.create(uri);
        this.databaseName = databaseName;
        this.collectionName = collectionName;
    }

    public List<Document> getBooks() {
        List<Document> bookList = new ArrayList<>();
        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            FindIterable<Document> documents = collection.find().limit(20);

            try (MongoCursor<Document> cursor = documents.iterator()) {
                while (cursor.hasNext()) {
                    Document document = cursor.next();
                    bookList.add(document);
                }
            }
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return bookList;
    }
    public void addBook(Document book) {
        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            collection.insertOne(book);
        } catch (MongoException e) {
            e.printStackTrace();
        }
    }
    public Document getBookById(String id) {
        try {
            MongoDatabase database = mongoClient.getDatabase(databaseName);
            MongoCollection<Document> collection = database.getCollection(collectionName);

            Document query = new Document("_id", new ObjectId(id));
            return collection.find(query).first();
        } catch (MongoException e) {
            e.printStackTrace();
        }
        return null;
    }
    public void close() {
        if (mongoClient != null) {
            mongoClient.close();
        }
    }
}
