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
    async Get_Exercise(data)
    {
        const log = await api('exerciseLog', data);
        return log;
    }, 
    Get_User()
    {
        $router.push({username: 'profile'});
    }
}