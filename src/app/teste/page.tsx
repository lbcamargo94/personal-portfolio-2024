export default function Teste() {
  const generatePosition = (): string => {
    const min = Math.ceil(1);
    const max = Math.floor(1260);
    const result = Math.floor(Math.random() * (max - min) + min);
    console.log(result);
    return result.toString();
  };

  return (
    <section className="flex items-center align-middle py-10 min-h-screen min-w-h-screen max-w-screen-xl flex-col justify-start font-sans bg-primary text-primary overflow-hidden">
      <h1>Teste</h1>

      <div className="w-full h-screen max-w-screen-xl bg-blue-950">
        <div className="w-1 h-1 p-1 bg-white rounded-full relative animate-pulse">
          {generatePosition()}
        </div>
      </div>
    </section>
  );
}
