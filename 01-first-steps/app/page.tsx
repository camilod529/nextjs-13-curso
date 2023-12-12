export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <span className="text-5xl">Hola mundo!</span>
            {new Date().toLocaleTimeString()}
        </main>
    );
}
