package ie.atu.logindatabase;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {this.loginService = loginService;}

    @PostMapping("/getlogin")
    public Map<String, Object> getPrinter() {return loginService.getLogin();}

    @GetMapping("/{id}")
    public Document getLoginById(@PathVariable String id) {return loginService.getLoginById(id);}
}
