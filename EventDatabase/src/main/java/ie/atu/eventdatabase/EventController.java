package ie.atu.eventdatabase;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class EventController {
    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping("/getEvents")
    public Map<String, Object> getBooks() {
        return eventService.getEvent();
    }

    @PostMapping("/addEvent")
    public Map<String, String> addBook(@RequestBody Document event) {
        eventService.addEvent(event);
        Map<String, String> response = new HashMap<>();
        response.put("saveBookResponse", "success");
        return response;
    }

    @GetMapping("/{id}")
    public Document getBookById(@PathVariable String id) {
        return eventService.getEventById(id);
    }

    @PostMapping("/removeBook")
    public Map<String, String> deleteBookById(@RequestBody Map<String, String> body) {
        String id = body.get("eventID");
        System.out.println(body);
        System.out.println("Received eventID: " + id);
        boolean isDeleted = eventService.deleteEventById(id);
        Map<String, String> response = new HashMap<>();
        response.put("deleteBookResponse", isDeleted ? "success" : "failure");
        return response;
    }
}
