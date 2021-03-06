package security;

import java.util.List;

/**
 *
 * @author lam
 */
public interface IUserFacade {

    /*
    Return the Roles if users could be authenticated, otherwise null
     */
    List<String> authenticateUser(String userName, String password);
    IUser getUserByUserId(String id);
    String regUser(String username, String password);
    String testMethod(String test);
    List<IUser> getAllUsers();
    
}
