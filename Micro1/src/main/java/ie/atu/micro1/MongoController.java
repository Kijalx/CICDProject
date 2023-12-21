package ie.atu.micro1;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class MongoController {

    private final MongoDBConnector mongoDBConnector;

    @Autowired
    public MongoController(MongoDBConnector mongoDBConnector) {
        this.mongoDBConnector = mongoDBConnector;
    }

    @PostMapping("/getBooks")
    public Map<String, Object> getBooks() {
        return mongoDBConnector.getBooks();
    }

    @PostMapping("/add")
    public Map<String, String> addBook(@RequestBody Document book) {
        mongoDBConnector.addBook(book);
        Map<String, String> response = new HashMap<>();
        response.put("saveBookResponse", "success");
        return response;
    }

    @GetMapping("/{id}")
    public Document getBookById(@PathVariable String id) {
        return mongoDBConnector.getBookById(id);
    }

    @PostMapping("/removeBook")
    public Map<String, String> deleteBookById(@RequestBody Map<String, String> body) {
        String id = body.get("bookID");
        System.out.println(body);
        System.out.println("Received bookID: " + id);
        boolean isDeleted = mongoDBConnector.deleteBookById(id);
        Map<String, String> response = new HashMap<>();
        response.put("deleteBookResponse", isDeleted ? "success" : "failure");
        return response;
    }
}
