export default function Page(){
  const userName= process.env.NEXT_PUBLIC_DB_USERNAME
  console.log("usernameeee",userName)
  return (
  <main>
    <h1> Booking Aap</h1>
  </main>
  );
}