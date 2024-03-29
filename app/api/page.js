import { sql } from '@vercel/postgres';

export default async function handler(request, response) {

    const { rows: results } = await sql`SELECT * FROM "apilist";`;

 return (
    <>
      <h1>API List</h1>

      <h1>
        <ul>
        {results.map((result) => (<li>{result.api}</li>))} 
		</ul>
      </h1>
    </>
  );//return
} //handler function