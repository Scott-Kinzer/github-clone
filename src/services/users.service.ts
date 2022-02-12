import axiosService from "./axios.service";


interface IApi {
    fetchPersonsByName: (name: string) => any;
}
function UsersFetch(this: any)  {

    this.fetchPersonsByName = (name: string) => {
        console.log('PERSON NAME', name);
        return axiosService.get(`/users/${name}`).then((response) => response.data);
    }    

};



const apiIntance: IApi  = new UsersFetch();

export default apiIntance;