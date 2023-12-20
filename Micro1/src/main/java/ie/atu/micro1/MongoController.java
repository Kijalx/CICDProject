package ie.atu.micro1;

import com.mongodb.client.FindIterable;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MongoController {
    private final MongoDBConnector mongoDBConnector;
    @Autowired
    public MongoController(MongoDBConnector mongoDBConnector) {
        this.mongoDBConnector = mongoDBConnector;
    }
    @GetMapping("/getBooks")
    public List<Document> getBooks() {
        return mongoDBConnector.getBooks();
    }
    @PostMapping("/addBook")
    public void addBook(@RequestBody Document book) {
        mongoDBConnector.addBook(book);
    }
    @GetMapping("/getBookById/{id}")
    public Document getBookById(@PathVariable String id) {
        return mongoDBConnector.getBookById(id);
    }
}
