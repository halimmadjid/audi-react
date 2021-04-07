const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IjM2NTUxZWYwYWZiNjY4NzgyYzY1MDc2Mjg3YjVhNTY0NGY1NTVmODEyMzZkZTYyMCIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTE2IDIwOjUyOjEwLjU1NDM5OFwiIn0.GppF2ATtB1B9Bsqs47SL4RBj4ndN9FsVa-ocqDB5r4o"

export const serverCalls = {
    get: async () => {
        const response = await fetch('/cars',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error("No Audi")
        }
        console.log(response)
        return await response.json()
    },
    delete: async(id:string) =>{
        const response = await fetch(`./cars/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error("Can't swap out your Audi")
        }
        return await response.json()
    },
    update: async (id:string,data:any = {}) =>{
        console.log("update check 1")
        const response = await fetch(`/cars/${id}`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        console.log("update check 2")
        if (!response.ok){
            throw new Error("Cant update your Audi")
        }
        return await response.json()
    },
    create: async (data:any = {})=>{
        console.log("check1")
        const response = await fetch('/cars',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error("Your Audi isn't in your ecosystem")
        }
        return await response.json()
    }
};