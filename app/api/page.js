import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    const { rows: results } = await sql`SELECT * FROM "apilist";`;

 return (
    <>
      <h1>API List</h1>

      <h1>
        <br></br>
        {results.map((result) => (<div>{result.api}</div>))} 
      </h1>
    </>
  );//return
} //handler function