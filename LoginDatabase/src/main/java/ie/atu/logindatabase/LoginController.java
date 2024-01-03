package ie.atu.logindatabase;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {this.loginService = loginService;}

    @PostMapping("/getlogin")
    public Map<String, Object> getPrinter() {return loginService.getLogin();}

    @PostMapping("/addLogin")
    public Map<String, String> addEvent(@RequestBody Document login) {
        loginService.addLogin(login);
        Map<String, String> response = new HashMap<>();
        response.put("saveLoginResponse", "success");
        return response;
    }
    @GetMapping("/{id}")
    public Document getLoginById(@PathVariable String id) {return loginService.getLoginById(id);}
}
