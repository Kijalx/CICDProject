package ie.atu.micro1;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/books")
public class MongoController {

    private final MongoDBConnector mongoDBConnector;

    @Autowired
    public MongoController(MongoDBConnector mongoDBConnector) {
        this.mongoDBConnector = mongoDBConnector;
    }

    @GetMapping("/getBooks")
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
}
