import React from "react";
interface Iuser<Response> {
  id: string;
  price: number;
  isAvailable: boolean;
}
async function userservice(): Promise<Iuser> {
  try {
    return await fetch(
      "https://my-json-server.typicode.com/Jeck99/fake-server/users"
    ).then((res: Response) => res.json());
    
  } catch (error) {
    console.log(error);
  }
}

export default userservice;
