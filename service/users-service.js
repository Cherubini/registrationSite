class UsersService{

    static BASE_URL = './mock-data/mock-users.json';

    static getUsersServive(){
        return fetch(this.BASE_URL).then(resp => resp.json());
    };

    static postUser(user){
        const jsonUser = JSON.stringify(user);
        return fetch(this.DATA,{method: 'POST', headers: {'content-type':'application/json'}, body: jsonUser})
    }

}