package ie.atu.printerdatabase;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class PrinterController {

    private final PrinterService printerService;

    @Autowired
    public PrinterController(PrinterService printerService) {this.printerService = printerService;}

    @PostMapping("/getPrinter")
    public Map<String, Object> getPrinter() {return printerService.getPrinter();}

    @GetMapping("/{id}")
    public Document getPrinterById(@PathVariable String id) {return printerService.getPrinterById(id);}
}
