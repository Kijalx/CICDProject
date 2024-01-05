package ie.atu.logindatabase;

import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class LoginDatabaseApplicationTests {
    private static final String connectionString = "mongodb+srv://alekskijewski88:YJTlAnfysBUSsjZw@cluster0.qjqgr8r.mongodb.net/?retryWrites=true&w=majority";
    private static final String databaseName = "books";
    private static final String collectionName = "login";
    private static MongoDatabase database;

    @BeforeAll
    static void setUp() {
        try {
            var mongoClient = MongoClients.create(connectionString);
            database = mongoClient.getDatabase(databaseName);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @AfterAll
    static void tearDown() {
        // Add any cleanup code if needed
    }

    @Test
    void testMongoDBConnection() {
        assertNotNull(database, "Failed to connect to MongoDB");
        System.out.println("Connected to MongoDB");
    }

    @Test
    void testCollectionExists() {
        assertNotNull(database, "Database connection not established");

        // Check if the collection exists
        assertTrue(collectionExists(database, collectionName),
                "Collection '" + collectionName + "' does not exist.");
    }

    private boolean collectionExists(MongoDatabase database, String collectionName) {
        return database.listCollectionNames().into(new ArrayList<>()).contains(collectionName);
    }

}
