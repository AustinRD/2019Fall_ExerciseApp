import { api, User } from "./my-fetch";
import $router from "../router/index";

export const Profile_Server = {
    User,
    Get_Exercise()
    {
        return api('exerciseLog');
    }, 
    Get_User()
    {
        $router.push({username: 'profile'});
    }
}