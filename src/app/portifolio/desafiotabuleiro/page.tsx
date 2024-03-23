import Subdivisao from '@/components/desafiotabuleiro/Subdivisao';

export default function Tabuleiro() {
    return (
        <main className='flex bg-gray-700 h-screen justify-center items-center' >

            {/*Numero 0 representa o inicio branco
            Numero 1 representa o inicio preto */}
            <ul>
                <Subdivisao numero={0} />
            </ul>
            <ul>
                <Subdivisao numero={1} />
            </ul>

            <ul>
                <Subdivisao numero={0} />
            </ul>
            <ul>
                <Subdivisao numero={1} />
            </ul>
            
            <ul>
                <Subdivisao numero={0} />
            </ul>
            <ul>
                <Subdivisao numero={1} />
            </ul>

            <ul>
                <Subdivisao numero={0} />
            </ul>
            <ul>
                <Subdivisao numero={1} />
            </ul>

        </main>
    );
}


