import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    const results = await sql`SELECT * FROM "kp-project6";`;

 return (
    <>
      <h1>API List</h1>

      <h1>
        <br></br>
        { your_object_list_here } 
      </h1>
    </>
  );//return
} //handler function