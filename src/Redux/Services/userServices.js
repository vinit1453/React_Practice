
class UserService {
    async getAll() {
      try {
        const response = fetch('http://localhost:3000/users');
        const res=response.json();
        console.log("api call",res);
        return res.json();
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
    async edit(data) {
      try {
       
      } catch (error) {
        
      }
    }

    async update(data) {
        try {
         
        } catch (error) {
          
        }
      }
      async delete(data) {
        try {
         
        } catch (error) {
          
        }
      }
  }
  export default UserService;