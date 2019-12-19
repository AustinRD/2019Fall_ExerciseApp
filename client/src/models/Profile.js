import { api, User } from "./my-fetch";
import $router from "../router/index";

export const Profile_Server = {
    User,
    async Login(username, password)
    {
        const { id } = await api('/login', {username, password} )
        User.id = id;
        $router.push( {name: 'profile'})
        return id;
    },
    Get_Exercise()
    {
        return api('exerciseLog');
    }, 
    Get_User()
    {
        $router.push({username: 'profile'});
    }
}